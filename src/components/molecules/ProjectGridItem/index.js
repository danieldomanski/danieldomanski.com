import React, { useRef, useEffect, useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Img from 'gatsby-image'
import Text from '../../atoms/Text'

const Container = styled.li`
  ${tw`relative h-full shadow-lg overflow-hidden`};

  &:hover {
    & article {
      transform: translateY(0);
      opacity: 1;
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
  transform: translateY(-125%);
  opacity: 0;
  transition: 0.5s ease-in-out;
`

const CoverActions = styled.span`
  ${tw`relative flex flex-col justify-center w-full h-full pin-b z-10 text-center px-8 shadow-lg`};
  background-color: rgba(240, 240, 240, 0.95);
  transition: 0.5s ease-in-out;
`

const Italic = styled.span`
  font-style: italic;
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
            <Text
              fontSize={['3xl', '4xl']}
              fontColor="primary.7"
              fontWeight="black"
            >
              {title.text}
            </Text>
            <Text fontSize={['base', 'xl']} fontColor="primary.7" my={2}>
              <Italic>ClientName</Italic>
            </Text>
            <Text fontSize={['base']} fontColor="primary.5">
              {description.text}
            </Text>
            <InvolvmentRow>
              <Text
                fontSize={['lg', 'xl']}
                fontColor="primary.7"
                fontWeight="bold"
              >
                Involvment
              </Text>
              <Text fontSize={['base', 'lg']} my={2}>
                UI Design, UI Development, Back end development
              </Text>
            </InvolvmentRow>
          </CoverActions>
        </Cover>
        <Img fluid={localFile.childImageSharp.fluid} />
      </Link>
    </Container>
  )
}

export default ProjectGridItem
