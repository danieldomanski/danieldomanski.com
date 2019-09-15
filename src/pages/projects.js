import React from 'react'
import { graphql } from 'gatsby'
import ProjectsGrid from '../components/molecules/ProjectsGrid'
import Box from '../components/atoms/Box'
import Text from '../components/atoms/Text'
import Footer from '../components/organisms/Footer'
import { formatProjectsPage } from '../utils/format'
import UnderlineText from '../components/atoms/UnderlineText'
import { usePageContent } from '../context/ContentContext'
import FadeIn from '../components/molecules/AnimatedBox/FadeIn'
import ProjectItem from '../components/molecules/ProjectItem'

const Projects = ({ data }) => {
  if (typeof window !== `undefined`) {
    const content = usePageContent(data)
    const { edges } = data.projects
    const { title } = content.worksPage

    return (
      <FadeIn>
        <Box
          width={1}
          maxWidth={1300}
          m={[0, 0, 0, 0, 'auto']}
          px={[6, 8, 12, 12, 12, 0]}
          pb={[12, 16, 20, 24, 24, 32]}
          flexGrow={1}
        >
          <UnderlineText>{title}</UnderlineText>
          <ProjectsGrid>
            {edges.map((project, idx) => (
              <ProjectItem project={project} />
            ))}
          </ProjectsGrid>
        </Box>
        <Box as="footer" m="auto" width={1}>
          <Footer variant="secondary" />
        </Box>
      </FadeIn>
    )
  }
  return null
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
            released
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
    worksPage: allPrismicProjectspage(filter: { lang: { eq: $locale } }) {
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
    footer: allPrismicFooter(filter: { lang: { eq: $locale } }) {
      edges {
        node {
          data {
            code_availability {
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
