import React from 'react'
import { graphql } from 'gatsby'
import ProjectsContainer from '../components/organisms/ProjectsContainer'
import Box from '../components/atoms/Box'
import Footer from '../components/organisms/Footer'
import Title from '../components/atoms/Text/Title'
import { usePageContent } from '../context/ContentContext'
import FadeIn from '../components/molecules/AnimatedBox/FadeIn'

const Projects = ({ data }) => {
  if (typeof window !== `undefined`) {
    const content = usePageContent(data)
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
          <Title>{title}</Title>
          <ProjectsContainer projects={data.projects.edges} />
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
            title {
              text
            }
            description {
              text
            }
            cover {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1200, quality: 90) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            released
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
