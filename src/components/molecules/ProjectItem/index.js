import React, { useContext } from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Img from 'gatsby-image/withIEPolyfill'
import { LocalizedLink } from '../../atoms/Link'
import Box from '../../atoms/Box'
import Text from '../../atoms/Text'
import { LocaleContext } from '../../../context/ContentContext'
import { getSliceContent } from '../../../utils/prismic'

const Container = styled.article`
  ${tw`relative w-full h-full shadow-md overflow-hidden`};

  height: 280px;
  transition: height 0.25s ease-in-out;

  & img {
    transition: transform 0.3s ease !important;
  }

  &:hover {
    & img {
      transform: scale(1.1);
    }
  }

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
  ${tw`relative w-full h-full shadow-md overflow-hidden`};

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
    height: 320px;
  }

  @media screen and (min-width: 768px) {
    height: 380px;
  }

  @media screen and (min-width: 1024px) {
    height: 450px;
  }
`

const BgCover = styled.div`
  ${tw`absolute w-full  flex flex-col justify-center items-center`}

  background: rgba(250, 250, 250, .98);
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

const NotReleasedText = {
  en: 'Case coming soon.',
  pl: 'Prezentacja w przygotowaniu.',
}

const ProjectItem = ({ project, ...rest }) => {
  const [locale] = useContext(LocaleContext)
  const { uid } = project.node
  const { body, released, title } = project.node.data

  const image = getSliceContent(body, 'image')
  const { localFile } = image[0]

  return (
    <Box position="relative" {...rest}>
      {released !== '0' ? (
        <Box>
          <ProjectTitle>{title.text}</ProjectTitle>
          <Container>
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
              <Text
                fontWeight="black"
                fontColor="primary.8"
                fontSize={['xl', '2xl']}
              >
                {NotReleasedText[locale]}
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
