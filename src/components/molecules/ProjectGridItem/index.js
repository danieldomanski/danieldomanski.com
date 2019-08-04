import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Img from 'gatsby-image'
import Box from '../../atoms/Box'
import Text from '../../atoms/Text'
import { getSliceContent } from '../../../utilitity/prismic'

const Container = styled.li`
  ${tw`relative w-full h-full shadow overflow-hidden`};
  @media screen and (min-width: 640px) {
    height: 500px;
  }
  height: 300px;
  &:hover {
    & article {
      transform: translateY(0);
      opacity: 1;
    }
  }
`

const BgCover = styled.div`
  ${tw`absolute w-full h-full`};

  background: linear-gradient(
    0deg,
    rgba(240, 240, 240, 0.7) 0%,
    rgba(240, 240, 240, 0) 100%
  );
`

const Cover = styled.article`
  ${tw`w-full h-full absolute`}
  z-index: 1;
  transform: translateY(-125%);
  opacity: 0;
  transition: 0.25s ease-in-out;
`

const CoverActions = styled.span`
  ${tw`relative flex flex-col justify-center w-full h-full pin-b text-center px-8 shadow-lg`};
  z-index: 5;
  background-color: rgba(240, 240, 240, 0.95);
  transition: 0.25s ease-in-out;
`

const Italic = styled.span`
  font-style: italic;
`

const InvolvmentRow = styled.div`
  ${tw`flex flex-col relative mt-8 md:mt-12`}

  &:before {
    ${tw`absolute w-12 bg-primary-900 pin-x m-auto`}
    content: '';
    height: 2px;
    top: -1em;
  }
`
/* 



*/

const ProjectGridItem = ({ project, area }) => {
  const { uid } = project.node
  const { body, description, title } = project.node.data

  const slice = getSliceContent(body, 'image')
  const { localFile } = slice[0]

  return (
    <Container area={area}>
      <BgCover />
      <Cover>
        <CoverActions>
          <Text
            fontFamily="sans"
            fontSize={['3xl', '4xl']}
            fontColor="primary.8"
            fontWeight="black"
            style={{ letterSpacing: '-1px' }}
          >
            {title.text}
          </Text>
          <Text fontSize={['sm', 'base']}>
            UI Design / UI Development / Back end development
          </Text>
        </CoverActions>
      </Cover>
      <Img fluid={localFile.childImageSharp.fluid} />
    </Container>
  )
}

export default ProjectGridItem
