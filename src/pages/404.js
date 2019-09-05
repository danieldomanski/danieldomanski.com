import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { usePageContent } from '../context/ContentContext'
import HomeParticles from '../components/molecules/HomeParticles'
import RichText from '../components/atoms/RichText'

const Container = styled.section`
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

const HeroContainer = styled.section`
  ${tw`w-full flex flex-col md:absolute m-auto`}
  text-align: center;
  @media screen and (min-width: 768px) {
    transform: translateY(-50%);
    top: 50%;
  }
`

const Line = styled.span`
  ${tw`m-auto my-10`}
  display: block;

  width: 80px;
  height: 4px;
  background-color: #a0a6b2;
  opacity: 1;
`

const NotFoundPage = ({ data }) => {
  const [content] = usePageContent(data)
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
