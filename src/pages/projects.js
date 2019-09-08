import React from 'react'
import { graphql } from 'gatsby'
import ProjectsGrid from '../components/molecules/ProjectsGrid'
import Box from '../components/atoms/Box'
import Text from '../components/atoms/Text'
import BottomBox from '../components/organisms/Footer/BottomBox'
import { formatProjectsPage } from '../utilitity/format'
import UnderlineText from '../components/atoms/UnderlineText'
import { usePageContent } from '../context/ContentContext'
import FadeIn from '../components/molecules/AnimatedBox/FadeIn'
import ProjectItem from '../components/molecules/ProjectItem'

const Projects = ({ data }) => {
  if (typeof window !== `undefined`) {
    usePageContent(data)
    const pageContent = formatProjectsPage(data.projectsPage.edges[0])

    return (
      <FadeIn>
        <Box
          width={1}
          maxWidth={1250}
          m={[0, 0, 0, 0, 'auto']}
          px={[8, 8, 12, 12, 12, 0]}
          flex={1}
        >
          <UnderlineText>{pageContent.title}</UnderlineText>
          <ProjectsGrid mt={[8, 8, 16]} mb={[24, 24, 32]}>
            {data.projects.edges.map((project, idx) => {
              const { title } = project.node.data

              return (
                <>
                  <Text
                    display={['inline-block', 'inline-block', 'none']}
                    fontFamily="sans"
                    fontColor="primary.7"
                    fontSize={['lg', 'xl']}
                    fontWeight="black"
                    mb={[0, 0, 8]}
                  >
                    {title.text}
                  </Text>
                  <ProjectItem project={project} mb={8} />
                </>
              )
            })}
          </ProjectsGrid>
        </Box>
        <Box as="footer" m="auto" width={1}>
          <BottomBox variant="secondary" />
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
