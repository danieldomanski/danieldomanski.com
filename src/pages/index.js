import React, { useContext, useEffect } from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Layout from '../components/templates/Layout'
import AsideNavigation from '../components/organisms/AsideNavigation'
import IndexSlides from '../components/templates/IndexSlides'
import { ProjectsContext } from '../context/ProjectsContext'
import SlidesProvider from '../context/SlidesContext'
import IndexHero from '../components/organisms/IndexHero'
import IndexProjects from '../components/organisms/IndexProjects'
import IndexContact from '../components/organisms/IndexContact'
import useWindowSize from '../hooks/useWindowSize'

import {
  IndexSlidesWrapper,
  IndexSlidesAbsoluteWrapper,
  IndexMobileWrapper,
} from '../components/atoms/Wrapper'

const SLIDE_ITEMS = ['ddev', 'services', 'projects', 'me', 'contact']

const Index = ({ data, pageContext, location }) => {
  const size = useWindowSize()
  const isMobile = size.width < 768
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
      <IndexSlidesWrapper>
        <IndexSlidesAbsoluteWrapper>
          <SlidesProvider>
            <IndexSlides />
            <AsideNavigation items={SLIDE_ITEMS} />
          </SlidesProvider>
        </IndexSlidesAbsoluteWrapper>
      </IndexSlidesWrapper>
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
