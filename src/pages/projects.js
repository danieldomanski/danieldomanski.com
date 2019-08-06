import React, { useContext, useEffect } from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/templates/Layout'
import Header from '../components/organisms/Header'
import ProjectsGrid from '../components/organisms/ProjectsGrid'
import Text from '../components/atoms/Text'
import Box from '../components/atoms/Box'
import { ProjectsContext } from '../context/ProjectsContext'
import BottomBox from '../components/organisms/Footer/BottomBox'

const Projects = ({ data, pageContext }) => {
  console.log({ pageContext })

  return (
    <Layout locale={pageContext.locale}>
      <Header variant="secondary" />
      <Box
        width={1}
        pt={[8, 8, 16]}
        maxWidth={1400}
        m="auto"
        px={[6, 6, 12, 16, 24]}
        flex={1}
      >
        <Text
          display={['block', 'block', 'inline-block']}
          fontColor="primary.8"
          fontWeight="black"
          fontSize={['3xl', '4xl', '5xl']}
        >
          Projects
        </Text>
        <ProjectsGrid
          projects={data.projects.edges}
          mt={[0, 0, 8]}
          mb={[0, 0, 8]}
        />
      </Box>
      <Box as="footer" width={1} maxWidth={1200} m="auto" px={8} mt={8}>
        <BottomBox variant="secondary" />
      </Box>
    </Layout>
  )
}

export default Projects

export const pageQuery = graphql`
  query ProjectsQuery($locale: String!) {
    projects: allPrismicProjects(filter: { lang: { eq: $locale } }) {
      edges {
        node {
          lang
          uid
          data {
            role {
              involvment {
                document {
                  data {
                    involvment {
                      text
                    }
                  }
                }
              }
            }
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
