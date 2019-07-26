import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/templates/Layout'
import Header from '../components/organisms/Header'
import Text from '../components/atoms/Text'
import { ContentWrapper } from '../components/atoms/Wrapper'
import { CollapsableLink } from '../components/atoms/Link'
import PostItem from '../components/organisms/PostItem'
import Filter from '../components/atoms/Filter'
import Box from '../components/atoms/Box'

const TopLayer = styled.section`
  ${tw`w-full h-screen px-16 lg:px-24 xl:px-32`}
  z-index: 4;
  padding-top: 120px;
`

const ContentFilters = styled.ul`
  ${tw`flex m-auto my-8`}
  list-style: none;
`

const BlogPosts = styled.ul`
  ${tw`my-8`}
  list-style: none;
`

const BlogContent = styled(ContentWrapper)`
  ${tw`pt-12 pb-24`}
  max-width: 800px;
`
const Row = styled(ContentWrapper)`
  ${tw`text-right my-4`}
  max-width: 800px;
`

const Blog = ({ data }) => {
  const tags = data.tags.edges
  const posts = data.posts.edges

  return (
    <Layout>
      <Header variant="secondary" />
      <TopLayer>
        <Box display="flex" flexDirection="column" maxWidth={800} m="auto">
          <Text fontColor="primary.7" fontWeight="black" fontSize="5xl" my={4}>
            Blog
          </Text>
          <Text fontColor="primary.6" fontSize="lg" mt={4}>
            “You already know that you will never be done learning. But most
            people "learn in private", and lurk. They consume content without
            creating any themselves. Whatever your thing is, make the thing you
            wish you had found when you were learning. The biggest beneficiary
            of you trying to help past you is future you. If others benefit,
            that's icing.”
          </Text>
          <Row>
            <CollapsableLink variant="bright">
              shawn wang, swyx.io
            </CollapsableLink>
          </Row>
        </Box>
        <BlogContent>
          <ContentFilters>
            {tags.map((tag, idx) => (
              <Filter>{tag.node.data.tag}</Filter>
            ))}
          </ContentFilters>
          <BlogPosts>
            {posts.map((post, idx) => (
              <PostItem data={post}>abc</PostItem>
            ))}
          </BlogPosts>
        </BlogContent>
      </TopLayer>
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
