import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Layout from '../Layout'
import Text from '../../atoms/Text'
import Title from '../../atoms/Text/Title'
import Box from '../../atoms/Box'
import Footer from '../../organisms/Footer'
import PostItem from '../../organisms/PostItem'
import { usePageContent } from '../../../context/ContentContext'

const BlogPosts = styled.ul`
  ${tw`my-8`}
  list-style: none;
`

const Tag = ({ data, pageContext }) => {
  if (typeof window !== `undefined`) {
    usePageContent(data)
    const posts = data.posts.edges
    const { tag } = pageContext

    return (
      <>
        <Box m="auto" px={[6, 6, 12, 16, 24]} flexGrow={1}>
          <Title>Posts about {tag}</Title>
          <BlogPosts>
            {posts.map((post, idx) => (
              <PostItem
                data={post}
                pb={idx === posts.length - 1 ? 0 : [8, 4, 10]}
                pt={idx === 0 ? 0 : [4, 4, 4]}
                mb={idx === posts.length - 1 ? 0 : [4, 4, 10]}
                borderBottom={
                  idx === posts.length - 1
                    ? 'none'
                    : '1px solid rgba(0,0,0,0.05)'
                }
              />
            ))}
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
