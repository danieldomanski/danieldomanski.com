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
import IndexBottomBg from '../images/IndexBottomBg.svg'
import { formatHome, formatHeader } from '../utilitity/format'

const OnTopLayer = styled.section`
  ${tw`relative overflow-hidden`}
  z-index: 5;
  margin-top: 100vh;
  margin-bottom: 500px;
  background-color: #fafafa;
  border-top: 2px solid rgba(0, 0, 0, 0.1);
  border-bottom: 2px solid rgba(0, 0, 0, 0.15);
`

const TopLayer = styled.section`
  ${tw`fixed pin-t w-full h-screen`}
  z-index: 4;
  background-color: #363636;
`

const Index = ({ data, pageContext }) => {
  const windowSize = useWindowSize()
  const isMobile = windowSize.width < 768
  const pageContent = formatHome(data.home.edges[0])
  const headerContent = formatHeader(data.header.edges[0])

  if (isMobile) {
    return (
      <Layout locale={pageContext.locale}>
        <Header content={headerContent} />
        <HomeSlide content={pageContent.hero} />
        <AboutSlide content={pageContent.about} />
        <ProjectsSlide
          projects={data.projects.edges}
          content={pageContent.works}
        />
        <BlogSlide posts={data.posts.edges} content={pageContent.blog} />
        <Footer variant="index">
          <UpperBox content={pageContent.footer} />
          <BottomBox />
        </Footer>
      </Layout>
    )
  }
  return (
    <Layout locale={pageContext.locale}>
      <TopLayer>
        <Header variant="secondary" content={headerContent} />
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
    </Layout>
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
                    text
                  }
                  upper_description {
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
