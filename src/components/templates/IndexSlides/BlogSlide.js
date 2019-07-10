import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Text from '../../atoms/Text'
import Paragraph from '../../atoms/Paragraph'
import SlidableButton from '../../atoms/Button/SlidableButton'
import { ContentWrapper } from '../../atoms/Wrapper'
import PostItem from '../../organisms/PostItem'

const posts = ['abc', 'bca', 'cba']

const Container = styled(ContentWrapper)`
  ${tw`py-16 px-12`}
`

const Row = styled.div`
  ${tw`flex justify-between items-center my-16`}
`

const BlogPosts = styled.ul`
  ${tw`py-12 m-auto`}
  max-width: 800px;
  list-style: none;
`

const BlogSlide = () => (
  <Container>
    <Row>
      <Text fontSize="5xl" fontColor="primary.7" fontWeight="black">
        Blog.
      </Text>
      <Link to="/blog">
        <SlidableButton>view all posts</SlidableButton>
      </Link>
    </Row>
    <Paragraph fontSize="lg" fontColor="primary.6" withLine>
      Learning new things is an integral part of every software engineer on a
      daily basis. Something that always characterized our industry is broad
      access to free resources. Learning in public is my way to give back some
      value to the community.
    </Paragraph>
    <BlogPosts>
      <Text fontSize="base" fontColor="primary.8" fontWeight="bold">
        Latest posts.
      </Text>
      {posts.map((post, idx) => (
        <PostItem>abc</PostItem>
      ))}
    </BlogPosts>
  </Container>
)

export default BlogSlide
