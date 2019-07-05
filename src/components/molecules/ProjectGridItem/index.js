import React, { useRef, useEffect, useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Img from 'gatsby-image'

const Container = styled.li`
  ${tw`relative h-full shadow-lg overflow-hidden`};

  &:hover {
    & article {
      transform: translateY(0px);
    }
  }

  grid-row-end: span ${props => props.spans};
`

const BgCover = styled.div`
  ${tw`absolute w-full h-full z-10`};

  background: linear-gradient(
    0deg,
    rgba(240, 240, 240, 0.5) 0%,
    rgba(240, 240, 240, 0) 100%
  );
`

const Cover = styled.article`
  ${tw`w-full h-full absolute z-10`}
  transform: translateY(-105%);
  transition: 0.5s ease-in-out;
`

const CoverActions = styled.span`
  ${tw`relative flex flex-col justify-center w-full h-full pin-b z-10 text-center px-8 shadow-lg`};
  background-color: rgba(240, 240, 240, 0.95);
  transition: 0.5s ease-in-out;
`

// ToDo:
// make useful variations of text with lots of flexibility

const Title = styled.h1`
  ${tw`text-2xl md:text-3xl xl:text-4xl font-black text-primary-800 my-1`}
`

const ClientTitle = styled.h2`
  ${tw`text-base md:text-lg xl:text-xl font-normal italic text-primary-800 my-2`}
`

const Description = styled.p`
  ${tw`text-sm md:text-base italic font-normal text-primary-600 m-0 my-1`}
`

const InvolvmentRow = styled.div`
  ${tw`relative mt-8 md:mt-12`}

  &:before {
    ${tw`absolute w-12 bg-primary-900 pin-x m-auto`}
    content: '';
    height: 2px;
    top: -1em;
  }
`

const Subheading = styled.h3`
  ${tw`font-sans uppercase font-bold text-primary-800 text-base m-0 my-1`}
`

const Description2 = styled.p`
  ${tw`text-sm md:text-base font-normal text-primary-800`}
`

const ProjectGridItem = ({ project, area }) => {
  const [spans, setSpans] = useState(0)
  const { body, description, title, color } = project.node.data
  const { uid } = project.node
  const { localFile, dimensions } = body[0].primary.image

  const calculateSpans = aspectRatio => {
    const baseSpan = 4 // 6 spans are base === 6 * 60 px = 360px as base
    const baseRatio = 1.25 // 4:3

    // each 0.1 difference in aspect ratio increases span by 1
    const spanAddition = Math.floor(
      Math.abs(Math.round((baseRatio - aspectRatio) * 100) / 100) / 0.1
    )

    return baseSpan + spanAddition
  }

  useEffect(() => {
    setSpans(calculateSpans(localFile.childImageSharp.fluid.aspectRatio))
  })

  return (
    <Container area={area} spans={spans}>
      <Link to={`/en/${uid}`}>
        <BgCover />
        <Cover>
          <CoverActions>
            <Title>{title.text}</Title>
            <ClientTitle>ClientName</ClientTitle>
            <Description>{description.text}</Description>
            <InvolvmentRow>
              <Subheading fontColor="primary-800" weight="bold">
                Involvment
              </Subheading>
              <Description2>
                UI Design, UI Development, Back end development
              </Description2>
            </InvolvmentRow>
          </CoverActions>
        </Cover>
        <Img fluid={localFile.childImageSharp.fluid} />
      </Link>
    </Container>
  )
}

export default ProjectGridItem
