import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/templates/Layout'
import Header from '../components/organisms/Header'
import Text from '../components/atoms/Text'
import PostItem from '../components/organisms/PostItem'
import Box from '../components/atoms/Box'
import Filter from '../components/atoms/Filter'
import BottomBox from '../components/organisms/Footer/BottomBox'

const ContentFilters = styled.ul`
  ${tw`flex flex-wrap m-auto my-8`}
  list-style: none;
`
const Blog = ({ data }) => {
  const tags = data.tags.edges
  const posts = data.posts.edges

  return (
    <Layout>
      <Header variant="secondary" />
      <Box
        width={1}
        pt={[8]}
        maxWidth={1200}
        m="auto"
        px={[6, 6, 12, 16, 24]}
        flex={1}
      >
        <Text
          fontColor="primary.7"
          fontWeight="black"
          fontSize={['3xl', '4xl', '5xl']}
        >
          Articles
        </Text>
        <Box>
          <ContentFilters>
            {tags.map((tag, idx) => (
              <Filter>{tag.node.data.tag}</Filter>
            ))}
          </ContentFilters>
          <Box>
            {posts.map((post, idx) => (
              <PostItem data={post} />
            ))}
          </Box>
        </Box>
      </Box>
      <Box width={1} maxWidth={1200} m="auto" px={8} mt={16}>
        <BottomBox variant="secondary" />
      </Box>
    </Layout>
  )
}
export default Blog

export const pageQuery = graphql`
  query PostsQuery($locale: String!) {
    posts: allPrismicPost(filter: { lang: { eq: $locale } }) {
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
    tags: allPrismicTag {
      edges {
        node {
          slugs
          data {
            tag
          }
        }
      }
    }
  }
`
