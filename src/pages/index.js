import React, { useContext, useEffect } from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Layout from '../components/templates/Layout'
import HomeSlide from '../components/templates/IndexSlides/HomeSlide'
import { ProjectsContext } from '../context/ProjectsContext'
import IndexHero from '../components/organisms/IndexHero'
import IndexProjects from '../components/organisms/IndexProjects'
import IndexContact from '../components/organisms/IndexContact'
import useWindowSize from '../hooks/useWindowSize'
import MeSlide from '../components/templates/IndexSlides/MeSlide'
import { IndexMobileWrapper } from '../components/atoms/Wrapper'
import ProjectsSlide from '../components/templates/IndexSlides/ProjectsSlide'
import BlogSlide from '../components/templates/IndexSlides/BlogSlide'
import Heading from '../components/atoms/Heading'
import { ThemeBtn } from '../components/atoms/Button'
import Icon from '../components/atoms/Icon'

const Parallax = styled.div`
  position: relative;
  z-index: 5;
  perspective: 1px;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
`

const MainWrapper = styled.main`
  ${tw`relative overflow-hidden shadow-lg`}
  position: relative;
  z-index: 5;

  overflow: hidden;
  margin-top: 100vh;
  margin-bottom: 500px;
  background-color: #f0f0f0;
`

const AboutSlide = styled.section`
  ${tw`flex flex-col items-center pb-32 m-auto`}
  max-width: 1400px;
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
        <IndexMobileWrapper>
          <IndexHero />
          <IndexProjects />
          <IndexContact />
        </IndexMobileWrapper>
      </Layout>
    )
  }
  return (
    <Layout>
      <HomeSlide />
      <MainWrapper>
        <ProjectsSlide />
        <BlogSlide />
        <AboutSlide>
          <Heading fontColor="primary-900" my={8}>
            Get to know me better.
          </Heading>
          <ThemeBtn>
            About me <Icon icon="arrow" width="16" />
          </ThemeBtn>
        </AboutSlide>
      </MainWrapper>
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
          uid
          data {
            title {
              html
              text
            }
            lang
            color
            description {
              html
              text
            }
            body {
              slice_type
              id
              primary {
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
          }
        }
      }
    }
  }
`
