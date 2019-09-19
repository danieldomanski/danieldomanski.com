import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { usePageContent } from '../context/ContentContext'
import HomeParticles from '../components/molecules/HomeParticles'
import RichText from '../components/organisms/Slices/RichText'

const Container = styled.section`
  width: 100%;
  height: 100vh;
  padding: 3rem 2rem;
  z-index: 4;
  @media screen and (min-width: 768px) {
    position: fixed;
    top: 0;
    background: radial-gradient(
      1300px at 50% 125%,
      #53617a -8%,
      #25273c 45%,
      #161723 100%
    );
  }
`

const HeroContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: auto;

  @media screen and (min-width: 768px) {
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
  }
`

const Line = styled.span`
  display: block;
  width: 80px;
  height: 4px;
  margin: 2.5rem auto;
  background-color: #a0a6b2;
  opacity: 1;
`

const NotFoundPage = ({ data }) => {
  if (typeof window !== `undefined`) {
    const content = usePageContent(data)
    const { title, subtitle, description } = content.notFoundPage

    return (
      <Container>
        <HomeParticles />
        <HeroContainer>
          <RichText content={title} />
          <RichText content={subtitle} />
          <Line />
          <RichText content={description} />
        </HeroContainer>
      </Container>
    )
  }

  return null
}

export default NotFoundPage

export const pageQuery = graphql`
  query NotFoundQuery($locale: String!) {
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
    notFoundPage: allPrismic404(filter: { lang: { eq: $locale } }) {
      edges {
        node {
          data {
            title {
              html
            }
            subtitle {
              html
            }
            description {
              html
            }
          }
        }
      }
    }
  }
`
