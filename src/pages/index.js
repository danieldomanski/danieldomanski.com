import React, { useContext, useEffect } from 'react'
import { graphql, Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Layout from '../components/templates/Layout'
import Header from '../components/organisms/Header'
import Footer from '../components/organisms/Footer'

import HomeSlide from '../components/templates/IndexSlides/HomeSlide'
import ProjectsSlide from '../components/templates/IndexSlides/ProjectsSlide'
import BlogSlide from '../components/templates/IndexSlides/BlogSlide'

import IndexProjects from '../components/organisms/IndexProjects'
import IndexContact from '../components/organisms/IndexContact'

import { IndexMobileWrapper, ContentWrapper } from '../components/atoms/Wrapper'
import Heading from '../components/atoms/Heading'
import Icon from '../components/atoms/Icon'
import { ThemeBtn } from '../components/atoms/Button'

import { ProjectsContext } from '../context/ProjectsContext'
import useWindowSize from '../hooks/useWindowSize'

import IndexBottomBg from '../images/IndexBottomBg.svg'
import Subheading from '../components/atoms/Subheading'

const MainWrapper = styled.main`
  ${tw`relative overflow-hidden shadow-lg`}

  z-index: 5;
  margin-top: 100vh;
  margin-bottom: 600px;
  background-color: #f0f0f0;

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

const AboutSlide = styled.section`
  ${tw`flex flex-col items-center pb-32`}
`

const Index = ({ data, pageContext, location }) => {
  const windowSize = useWindowSize()
  const isMobile = windowSize.width < 768
  const [, setProjects] = useContext(ProjectsContext)

  useEffect(() => {
    setProjects(data.projects.edges)
  }, [])

  if (isMobile) {
    return (
      <Layout>
        <IndexMobileWrapper>
          <IndexProjects />
          <IndexContact />
        </IndexMobileWrapper>
      </Layout>
    )
  }
  return (
    <Layout>
      <TopLayer>
        <Header />
        <HomeSlide />
      </TopLayer>
      <MainWrapper>
        <ProjectsSlide />
        <BlogSlide />
        <ContentWrapper>
          <AboutSlide>
            <Heading fontColor="primary-800" weight="black" size="5xl" my={12}>
              Get to know me better.
            </Heading>
            <Link to="/about">
              <ThemeBtn>
                <Subheading fontColor="primary-800" weight="bold">
                  About me <Icon icon="arrow" width="24" />
                </Subheading>
              </ThemeBtn>
            </Link>
          </AboutSlide>
        </ContentWrapper>
      </MainWrapper>
      <Footer />
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
    projects: allPrismicProjects(limit: 3, filter: { lang: { eq: $locale } }) {
      edges {
        node {
          uid
          data {
            title {
              html
              text
            }
            lang
            color
            description {
              html
              text
            }
            body {
              slice_type
              id
              primary {
                image {
                  dimensions {
                    width
                    height
                  }
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
        }
      }
    }
  }
`
