import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/templates/Layout'
import Header from '../components/organisms/Header'
import ProjectsGrid from '../components/organisms/ProjectsGrid'
import Text from '../components/atoms/Text'
import Box from '../components/atoms/Box'
import BottomBox from '../components/organisms/Footer/BottomBox'
import { formatProjectsPage, formatHeader } from '../utilitity/format'

const Projects = ({ data, pageContext }) => {
  console.log({ data })
  const pageContent = formatProjectsPage(data.projectsPage.edges[0])
  const headerContent = formatHeader(data.header.edges[0])

  return (
    <Layout locale={pageContext.locale}>
      <Header content={headerContent} />
      <Box
        width={1}
        pt={[8, 8, 16]}
        maxWidth={1800}
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
          {pageContent.title}
        </Text>
        <ProjectsGrid
          projects={data.projects.edges}
          mt={[0, 0, 24]}
          mb={[0, 0, 32]}
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
