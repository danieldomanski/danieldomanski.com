import React, { useContext, useEffect } from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Layout from '../components/templates/Layout'
import Header from '../components/organisms/Header'
import Footer from '../components/organisms/Footer'

import HomeSlide from '../components/templates/IndexSlides/HomeSlide'
import ProjectsSlide from '../components/templates/IndexSlides/ProjectsSlide'
import BlogSlide from '../components/templates/IndexSlides/BlogSlide'
import AboutSlide from '../components/templates/IndexSlides/AboutSlide'

import { IndexMobileWrapper, ContentWrapper } from '../components/atoms/Wrapper'
import ProjectsGrid from '../components/organisms/ProjectsGrid'
import { ProjectsContext } from '../context/ProjectsContext'
import useWindowSize from '../hooks/useWindowSize'

import Text from '../components/atoms/Text'
import Paragraph from '../components/atoms/Paragraph'
import TextHighlight from '../components/atoms/TextHighlight'
import Box from '../components/atoms/Box'
import Column from '../components/atoms/Box/Column'
import IndexBottomBg from '../images/IndexBottomBg.svg'

const MainWrapper = styled.main`
  ${tw`relative overflow-hidden shadow-lg`}

  z-index: 5;
  margin-top: 100vh;
  margin-bottom: 500px;
  background-color: #f0f0f0;

  &:after {
    content: '';
    display: block;
    height: 1200px;
    min-width: 2000px;
    pointer-events: none;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    z-index: -1;
    bottom: 0;
    background-image: url(${IndexBottomBg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    opacity: 1;
  }
`

const TopLayer = styled.section`
  ${tw`fixed pin-t w-full h-screen`}
  z-index: 4;
`

const HeroMobile = styled.div`
  ${tw`w-full bg-primary-900 py-12 px-8 mb-12`}
`

const Index = ({ data, pageContext, location }) => {
  const windowSize = useWindowSize()
  const isMobile = windowSize.width < 768
  const [, setProjects] = useContext(ProjectsContext)

  useEffect(() => {
    setProjects(data.projects.edges)
  }, [])

  if (isMobile) {
    return (
      <Layout>
        <Header variant="secondary" />
        <IndexMobileWrapper>
          <HeroMobile>
            <Text
              display="block"
              fontSize="6xl"
              fontColor="primary.3"
              fontWeight="black"
            >
              Hi.
            </Text>
            <Text fontSize="3xl" fontColor="primary.3" fontWeight="black">
              I’m Daniel Domański.
            </Text>
            <Text
              fontColor="primary.5"
              fontSize={['base']}
              lineHeight="relaxed"
              mt={4}
              mb={4}
            >
              I’m a web developer currently based in
              <TextHighlight fontColor="primary.5" fontSize="lg" mx={1}>
                Szczecin, Poland.
              </TextHighlight>
              My job is to help
              <TextHighlight fontColor="primary.5" fontSize="lg" mx={1}>
                your business grow
              </TextHighlight>
              by providing modern digital products.
            </Text>
          </HeroMobile>
          <Box px={4}>
            <Column>
              <Text fontColor="primary-900" fontWeight="black" my={4}>
                Works
              </Text>
              <Paragraph fontColor="primary.7" withLine>
                My recent works.
              </Paragraph>
            </Column>

            <ProjectsGrid />
            <AboutSlide />
          </Box>
        </IndexMobileWrapper>
        <Footer />
      </Layout>
    )
  }
  return (
    <Layout>
      <TopLayer>
        <Header />
        <HomeSlide />
      </TopLayer>
      <MainWrapper>
        <ProjectsSlide />
        <BlogSlide />
        <ContentWrapper>
          <AboutSlide />
        </ContentWrapper>
      </MainWrapper>
      <Footer />
    </Layout>
  )
}

export default Index

Index.propTypes = {
  data: PropTypes.shape({
    projects: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
  }).isRequired,
  pageContext: PropTypes.shape({
    locale: PropTypes.string.isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
}

export const pageQuery = graphql`
  query IndexQuery($locale: String!) {
    projects: allPrismicProjects(limit: 3, filter: { lang: { eq: $locale } }) {
      edges {
        node {
          lang
          uid
          data {
            body {
              ... on PrismicProjectsBodyDetail {
                slice_type
                id
                primary {
                  detailtitle {
                    text
                  }
                  detaildescription1 {
                    text
                  }
                  image {
                    localFile {
                      childImageSharp {
                        fluid(maxWidth: 1200, quality: 90) {
                          ...GatsbyImageSharpFluid_withWebp
                        }
                      }
                    }
                  }
                }
              }
              ... on PrismicProjectsBodyImage {
                slice_type
                id
                primary {
                  image {
                    alt
                    url
                    localFile {
                      childImageSharp {
                        fluid(maxWidth: 1200, quality: 90) {
                          ...GatsbyImageSharpFluid_withWebp
                        }
                      }
                    }
                  }
                }
              }
            }
            color
            title {
              text
            }
            description {
              text
            }
          }
        }
      }
    }
  }
`
