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

const OnTopLayer = styled.section`
  ${tw`relative overflow-hidden`}
  z-index: 5;
  margin-top: 100vh;
  margin-bottom: 500px;
  background-color: #f5f5f5;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);

  &:after {
    content: '';
    display: block;
    height: 1200px;
    min-width: 2000px;
    pointer-events: none;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    z-index: -1;
    bottom: 0;
    background-image: url(${IndexBottomBg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    opacity: 1;
  }
`

const TopLayer = styled.section`
  ${tw`fixed pin-t w-full h-screen`}
  z-index: 4;
`

const projectsToShowcase = ['szczecin', 'coach']

const Index = ({ data, pageContext }) => {
  const windowSize = useWindowSize()
  const isMobile = windowSize.width < 768

  if (isMobile) {
    return (
      <Layout locale={pageContext.locale}>
        <Header />
        <HomeSlide />
        <AboutSlide />
        <ProjectsSlide projects={data.projects.edges} />
        <BlogSlide posts={data.posts.edges} />
        <Footer variant="index">
          <UpperBox />
          <BottomBox />
        </Footer>
      </Layout>
    )
  }
  return (
    <Layout locale={pageContext.locale}>
      <TopLayer>
        <Header variant="index" />
        <HomeSlide />
      </TopLayer>
      <OnTopLayer>
        <AboutSlide />
        <ProjectsSlide projects={data.projects.edges} />
        <BlogSlide posts={data.posts.edges} />
      </OnTopLayer>
      <Footer variant="primary">
        <UpperBox />
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
  location: PropTypes.object.isRequired,
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
  }
`
