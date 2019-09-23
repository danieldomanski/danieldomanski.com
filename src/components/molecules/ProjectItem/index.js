import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image/withIEPolyfill'
import Box from '../../atoms/Box'
import Text from '../../atoms/Text'
import LocalizedLink from '../../atoms/LocalizedLink'
import theme from '../../../config/theme'

const STRING_CONSTANTS = {
  'en-pl': 'Case coming soon.',
  pl: 'Prezentacja w przygotowaniu.',
}

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
  background: rgba(255, 255, 255, 0.95);
  z-index: 6;
  transition: all 0.4s ease 0.1s;
  height: 0;

  & p {
    opacity: 0;
    transition: opacity 0.1s ease 0.2s;
  }
`

const formatProject = project => ({
  locale: project.node.lang,
  uid: project.node.uid,
  title: project.node.data.title.text,
  description: project.node.data.description.text,
  released: project.node.data.released != '0',
  cover: project.node.data.cover.localFile.childImageSharp.fluid,
})

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
  >
    {children}
  </Text>
)

const ProjectItem = ({ project }) => {
  const { locale, uid, title, released, cover } = formatProject(project)

  return (
    <Box as="li" position="relative" display="inline-block">
      {released ? (
        <Box>
          <ProjectTitle>{title}</ProjectTitle>
          <Container>
            <LocalizedLink
              to={`/projects/${uid}`}
              aria-label={title}
              data-testid="project-item"
            >
              <Img fluid={cover} />
            </LocalizedLink>
          </Container>
        </Box>
      ) : (
        <Box>
          <ProjectTitle>{title}</ProjectTitle>
          <HoverScale>
            <BgCover>
              <Text
                fontWeight="black"
                fontColor="primary.8"
                fontSize={['xl', '2xl']}
              >
                {STRING_CONSTANTS[locale]}
              </Text>
              <Text fontSize="3xl" mt={4}>
                🤯
              </Text>
            </BgCover>
            <Img fluid={cover} />
          </HoverScale>
        </Box>
      )}
    </Box>
  )
}

export default ProjectItem
