import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Box from '../components/atoms/Box'
import HomeSlide from '../components/organisms/HomeSlides/HomeSlide'
import ProjectsSlide from '../components/organisms/HomeSlides/ProjectsSlide'
import BlogSlide from '../components/organisms/HomeSlides/BlogSlide'
import AboutSlide from '../components/organisms/HomeSlides/AboutSlide'
import Footer from '../components/organisms/Footer'
import FadeIn from '../components/molecules/AnimatedBox/FadeIn'
import useWindowSize from '../hooks/useWindowSize'
import { usePageContent } from '../context/ContentContext'
import WorkWithMe from '../components/molecules/WorkWithMe'
import theme from '../config/theme'

const OnTopLayer = styled.section`
  position: relative;
  overflow: hidden;
  padding: 4rem 0;
  box-shadow: ${theme.shadows.lg};
  z-index: 6;
  margin-top: 100vh;
  margin-bottom: 810px;
  background-color: #f0f0f0;
`

const TopLayer = styled.section`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 4;
  background: radial-gradient(
    1300px at 50% 100%,
    #414559 0%,
    #1f2033 50%,
    #13141e 100%
  );
`

const Index = ({ data }) => {
  if (typeof window !== `undefined`) {
    const windowSize = useWindowSize()
    const isMobile = windowSize.width < 768
    const content = usePageContent(data)
    const { hero, works, about, blog, footer } = content.home

    if (isMobile) {
      return (
        <FadeIn>
          <Box>
            <HomeSlide content={hero} />
            <ProjectsSlide projects={data.projects.edges} content={works} />
            <BlogSlide posts={data.posts.edges} content={blog} />
          </Box>
          <WorkWithMe variant="primary">
            <Footer variant="secondary" />
          </WorkWithMe>
        </FadeIn>
      )
    }
    return (
      <>
        <TopLayer>
          <HomeSlide content={hero} />
        </TopLayer>
        <OnTopLayer id="topLayer">
          <AboutSlide content={about} />
          <ProjectsSlide projects={data.projects.edges} content={works} />
          <BlogSlide posts={data.posts.edges} content={blog} />
        </OnTopLayer>
        <WorkWithMe variant="primary">
          <Footer variant="primary" />
        </WorkWithMe>
      </>
    )
  }
  return null
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
}

export const pageQuery = graphql`
  query IndexQuery($locale: String!) {
    projects: allPrismicProjects(
      limit: 2
      filter: { lang: { eq: $locale }, uid: { in: ["coach", "szczecin"] } }
    ) {
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
    posts: allPrismicPost(limit: 3, filter: { lang: { eq: $locale } }) {
      edges {
        node {
          first_publication_date
          lang
          uid
          last_publication_date
          data {
            title {
              text
            }
            description {
              text
            }
            tags {
              tag {
                slug
                uid
              }
            }
            released
            category {
              slug
            }
            icon {
              text
            }
          }
        }
      }
    }
    home: allPrismicHome(filter: { lang: { eq: $locale } }) {
      edges {
        node {
          data {
            hero_title {
              text
            }
            hero_description {
              text
            }
            about_title {
              text
            }
            process_details {
              text
            }
            about_description {
              text
            }
            about_button {
              text
            }
            works_title {
              text
            }
            works_description {
              text
            }
            works_button {
              text
            }
            blog_title {
              text
            }
            blog_description {
              text
            }
            blog_button {
              text
            }
            work_with_me_title {
              html
            }
            work_with_me_subtitle {
              html
            }
            work_with_me_description {
              html
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
