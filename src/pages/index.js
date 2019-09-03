import React, { useContext, useEffect } from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Layout from '../components/templates/Layout'
import Header from '../components/organisms/Header'
import Footer from '../components/organisms/Footer'
import UpperBox from '../components/organisms/Footer/UpperBox'
import BottomBox from '../components/organisms/Footer/BottomBox'

import HomeSlide from '../components/templates/IndexSlides/HomeSlide'
import ProjectsSlide from '../components/templates/IndexSlides/ProjectsSlide'
import BlogSlide from '../components/templates/IndexSlides/BlogSlide'
import AboutSlide from '../components/templates/IndexSlides/AboutSlide'
import useWindowSize from '../hooks/useWindowSize'
import {
  formatHome,
  formatHeader,
  formatRawDataToContext,
} from '../utilitity/format'
import { usePageContent } from '../context/ContentContext'
import FadeIn from '../components/molecules/AnimatedBox/FadeIn'

const OnTopLayer = styled.section`
  ${tw`relative overflow-hidden py-24 xl:py-32 shadow-lg`}
  z-index: 5;
  margin-top: 100vh;
  margin-bottom: 90vh;
  background-color: #f0f0f0;
`

const TopLayer = styled.section`
  ${tw`fixed pin-t w-full`}
  height: 100vh;
  z-index: 4;
  background: radial-gradient(
    1300px at 50% 125%,
    #53617a -8%,
    #25273c 45%,
    #161723 100%
  );
`

const Index = ({ data }) => {
  const windowSize = useWindowSize()
  const isMobile = windowSize.width < 768
  const pageContent = formatHome(data.home.edges[0])
  const headerContent = formatHeader(data.header.edges[0])
  const [content] = usePageContent(data)

  if (isMobile) {
    return (
      <FadeIn>
        <HomeSlide content={pageContent.hero} />
        <ProjectsSlide
          projects={data.projects.edges}
          content={pageContent.works}
        />
        <BlogSlide posts={data.posts.edges} content={pageContent.blog} />
        <Footer variant="index">
          <UpperBox content={pageContent.footer} />
          <BottomBox />
        </Footer>
      </FadeIn>
    )
  }
  return (
    <>
      <TopLayer>
        <HomeSlide content={pageContent.hero} />
      </TopLayer>
      <OnTopLayer>
        <AboutSlide content={pageContent.about} />
        <ProjectsSlide
          projects={data.projects.edges}
          content={pageContent.works}
        />
        <BlogSlide posts={data.posts.edges} content={pageContent.blog} />
      </OnTopLayer>
      <Footer variant="primary">
        <UpperBox content={pageContent.footer} />
        <BottomBox variant="primary" />
      </Footer>
    </>
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
            body {
              __typename
              ... on PrismicHomeBodyFooter {
                slice_type
                primary {
                  upper_title {
                    html
                    text
                  }
                  upper_subtitle {
                    html
                    text
                  }
                  upper_description {
                    html
                    text
                  }
                }
              }
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
