import React, { useContext } from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image/withIEPolyfill'
import LocalizedLink from '../../atoms/LocalizedLink'
import Box from '../../atoms/Box'
import Text from '../../atoms/Text'
import { LocaleContext } from '../../../context/ContentContext'
import { getSliceContent } from '../../../utils/prismic'
import theme from '../../../config/theme'

const Container = styled.article`
  position: relative;
  width: 100%;
  overflow: hidden;
  height: 280px;
  transition: height 0.25s ease-in-out;
  box-shadow: ${theme.shadows.md};

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
    box-shadow: ${theme.shadows.lg};
  }

  @media screen and (min-width: 1024px) {
    height: 450px;
  }
`

const HoverScale = styled.div`
  box-shadow: ${theme.shadows.lg};

  position: relative;
  width: 100%;
  height: 280px;
  overflow: hidden;

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
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(250, 250, 250, 0.98);
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
    fontSize={['lg']}
    fontWeight="black"
    fontColor="primary.4"
    style={{ textTransform: 'uppercase' }}
    mb={[12, 8, 12, 12, 12]}
    flex={1}
    mb={[4, 4, 8]}
    letterSpacing="-0.025em"
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
    <Box as="li" position="relative" {...rest}>
      {released !== '0' ? (
        <Box>
          <ProjectTitle>{title.text}</ProjectTitle>
          <Container>
            <LocalizedLink to={`/projects/${uid}`} aria-label={title.text}>
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
