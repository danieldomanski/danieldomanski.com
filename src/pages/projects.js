import React, { useContext, useEffect } from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/templates/Layout'
import Header from '../components/organisms/Header'
import ProjectGrid from '../components/organisms/ProjectsGrid'
import Heading from '../components/atoms/Heading'
import { ContentWrapper } from '../components/atoms/Wrapper'
import { ProjectsContext } from '../context/ProjectsContext'

const TopLayer = styled.section`
  ${tw`absolute w-full py-12 px-12`}
  top: 160px;
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
          <Heading fontColor="primary-800" weight="black" size="6xl">
            Projects.
          </Heading>
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
