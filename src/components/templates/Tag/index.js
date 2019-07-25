import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Footer from '../../organisms/Footer'
import Layout from '../Layout'
import Header from '../../organisms/Header'
import Text from '../../atoms/Text'
import Icon from '../../atoms/Icon'
import Box from '../../atoms/Box'
import BottomBox from '../../organisms/Footer/BottomBox'
import { formatDate } from '../../../utilitity/date'
import PostItem from '../../organisms/PostItem'

const Main = styled(Box)`
  ${tw`relative bg-primary-100 `}
  padding-top: 120px;
  padding-bottom: 600px;

  @media screen and (min-width: 768px) {
    margin-bottom: 100px;
    padding-bottom: 0;
  }
  z-index: 5;
`

const BlogPosts = styled.ul`
  ${tw`my-8`}
  list-style: none;
`

const Tag = ({ data, pageContext }) => {
  const posts = data.posts.edges
  const { tag } = pageContext

  return (
    <Layout>
      <Header variant="secondary" />
      <Main bg="primary.1" m="auto" px={[4, 8, 16, 24, 32]}>
        <Text fontWeight="black" fontColor="primary.8">
          Posts about {tag}
        </Text>
        <BlogPosts>
          {posts.map((post, idx) => (
            <PostItem data={post}>abc</PostItem>
          ))}
        </BlogPosts>
      </Main>
      <Footer>
        <BottomBox />
      </Footer>
    </Layout>
  )
}

export default Tag

export const pageQuery = graphql`
  query PostsByTag($uid: String!) {
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
  }
`
