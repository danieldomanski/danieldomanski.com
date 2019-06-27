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

const MainWrapper = styled.main`
  position: relative;
  z-index: 5;
  background-attachment: fixed;
  margin-top: 100vh;
  margin-bottom: 500px;
  background-color: #f0f0f0;
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
        <MeSlide />
        <ProjectsSlide />
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
