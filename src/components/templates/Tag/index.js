import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Title from '../../atoms/Text/Title'
import Box from '../../atoms/Box'
import Footer from '../../organisms/Footer'
import { usePageContent } from '../../../context/ContentContext'

const BlogPosts = styled.ul`
  margin: 4rem 0;
  list-style: none;
`

const Tag = ({ data, pageContext }) => {
  if (typeof window !== `undefined`) {
    usePageContent(data)
    const posts = data.posts.edges
    const { tag } = pageContext

    return (
      <>
        <Box m="auto" px={[6, 6, 12, 16, 24]} pb={8} flexGrow={1}>
          <Title>Posts about {tag}</Title>
          <BlogPosts>
            <PostsContainer posts={posts} />
          </BlogPosts>
        </Box>
        <Box as="footer" width={1} m="auto">
          <Footer variant="secondary" />
        </Box>
      </>
    )
  }

  return null
}

export default Tag

export const pageQuery = graphql`
  query PostsByTag($uid: String!, $locale: String!) {
    posts: allPrismicPost(
      filter: { data: { tags: { elemMatch: { tag: { uid: { eq: $uid } } } } } }
    ) {
      edges {
        node {
          uid
          first_publication_date
          last_publication_date
          data {
            title {
              text
            }
            tags {
              tag {
                document {
                  href
                  slugs
                  data {
                    tag
                  }
                }
                slug
              }
            }
            description {
              text
            }
            icon {
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
