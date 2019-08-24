import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Layout from '../components/templates/Layout'
import Header from '../components/organisms/Header'
import ProjectsGrid from '../components/organisms/ProjectsGrid'
import Text from '../components/atoms/Text'
import Box from '../components/atoms/Box'
import BottomBox from '../components/organisms/Footer/BottomBox'
import { formatProjectsPage, formatHeader } from '../utilitity/format'

const Line = styled.span`
  ${tw`mt-2 md:mt-4`}
  display: block;
  width: 80px;
  height: 4px;
  background-color: #181818;
`

const Projects = ({ data, pageContext }) => {
  const pageContent = formatProjectsPage(data.projectsPage.edges[0])
  const headerContent = formatHeader(data.header.edges[0])

  return (
    <Layout locale={pageContext.locale}>
      <Header content={headerContent} />
      <Box
        width={1}
        maxWidth={1200}
        m={[0, 0, 0, 0, 'auto']}
        px={[6, 8, 12, 12, 12, 0]}
        flex={1}
      >
        <Text
          fontFamily="sans"
          fontColor="primary.8"
          fontWeight="black"
          fontSize={['3xl', '4xl', '5xl']}
        >
          {pageContent.title}
          <Line />
        </Text>
        <ProjectsGrid
          projects={data.projects.edges}
          mt={[8, 8, 16]}
          mb={[16, 8, 32]}
        />
      </Box>
      <Box as="footer" m="auto" mx={[8, 8, 12]} mt={8}>
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
    projectsPage: allPrismicProjectspage(filter: { lang: { eq: $locale } }) {
      edges {
        node {
          data {
            page_title {
              text
            }
          }
        }
      }
    }
    header: allPrismicHeader(filter: { lang: { eq: $locale } }) {
      edges {
        node {
          data {
            brand {
              text
            }
            nav_home {
              text
            }
            nav_projects {
              text
            }
            nav_about {
              text
            }
            nav_articles {
              text
            }
          }
        }
      }
    }
  }
`
