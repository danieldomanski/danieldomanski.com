import React, { useContext, useEffect } from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/templates/Layout'
import Header from '../components/organisms/Header'
import ProjectGrid from '../components/organisms/ProjectsGrid'
import Text from '../components/atoms/Text'
import { ContentWrapper } from '../components/atoms/Wrapper'
import { ProjectsContext } from '../context/ProjectsContext'

const TopLayer = styled.section`
  ${tw`w-full py-32 px-4 sm:px-8 md:px-16`}
  z-index: 5;
`

const Blog = ({ data }) => {
  const [, setProjects] = useContext(ProjectsContext)

  useEffect(() => {
    setProjects(data.projects.edges)
  }, [])

  return (
    <Layout>
      <Header variant="secondary" />
      <TopLayer>
        <ContentWrapper>
          <Text fontColor="primary.8" fontWeight="black" fontSize="6xl">
            Projects.
          </Text>
          <ProjectGrid />
        </ContentWrapper>
      </TopLayer>
    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  query ProjectsQuery($locale: String!) {
    projects: allPrismicProjects(filter: { lang: { eq: $locale } }) {
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
                  dimensions {
                    width
                    height
                  }
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
