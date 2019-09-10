import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Img from 'gatsby-image'
import Tilt from 'react-tilt'
import { LocalizedLink } from '../../atoms/Link'
import Box from '../../atoms/Box'
import Text from '../../atoms/Text'

import { getSliceContent } from '../../../utilitity/prismic'

const Container = styled(Tilt)`
  ${tw`relative w-full h-full shadow-md overflow-hidden mt-2`};

  height: 280px;
  transition: height 0.25s ease-in-out;

  @media screen and (min-width: 420px) {
    height: 320px;
  }

  @media screen and (min-width: 768px) {
    height: 380px;
  }

  @media screen and (min-width: 1024px) {
    height: 450px;
  }
`

const HoverScale = styled.div`
  ${tw`relative w-full h-full shadow-md overflow-hidden mt-2`};

  height: 280px;

  & img {
    transition: 0.2s ease !important;
  }

  &:hover {
    & > div {
      visibility: visible;
      height: 100%;

      & p {
        opacity: 1;
      }
    }
  }

  @media screen and (min-width: 420px) {
    height: 300px;
  }

  @media screen and (min-width: 768px) {
    height: 400px;
  }

  @media screen and (min-width: 1024px) {
    height: 460px;
  }
`

const BgCover = styled.div`
  ${tw`absolute w-full  flex flex-col justify-center items-center`}

  background: rgba(255, 255, 255, 1);
  z-index: 6;
  transition: all 0.4s ease 0.1s;
  height: 0;

  & p {
    opacity: 0;

    transition: opacity 0.1s ease 0.2s;
  }
`

const ProjectTitle = ({ children }) => (
  <Text
    display={['inline-block', 'inline-block', 'none']}
    fontFamily="sans"
    fontColor="primary.9"
    fontSize="xl"
    fontWeight="black"
    mb={[0, 0, 8]}
  >
    {children}
  </Text>
)

const ProjectItem = ({ project, last }) => {
  const { uid } = project.node
  const { body, released, title } = project.node.data

  const image = getSliceContent(body, 'image')
  const { localFile } = image[0]

  return (
    <Box position="relative" mb={last ? 0 : [10, 10, 12]} mx={[0, 0, 8]}>
      {released !== '0' ? (
        <Box>
          <ProjectTitle>{title.text}</ProjectTitle>
          <Container options={{ max: 20, scale: 1.02 }}>
            <LocalizedLink to={`/projects/${uid}`}>
              <Img fluid={localFile.childImageSharp.fluid} />
            </LocalizedLink>
          </Container>
        </Box>
      ) : (
        <Box>
          <ProjectTitle>{title.text}</ProjectTitle>
          <HoverScale>
            <BgCover>
              <Text fontWeight="bold" fontColor="primary.9" fontSize="3xl">
                Case coming soon.
              </Text>
              <Text fontSize="3xl" mt={4}>
                🤯
              </Text>
            </BgCover>
            <Img fluid={localFile.childImageSharp.fluid} />
          </HoverScale>
        </Box>
      )}
    </Box>
  )
}

export default ProjectItem
