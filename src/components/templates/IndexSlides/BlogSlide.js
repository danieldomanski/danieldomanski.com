import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Heading from '../../atoms/Heading'
import Paragraph from '../../atoms/Paragraph'
import { SlidableBtn } from '../../atoms/Button'
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
      <Heading fontColor="primary-800" weight="black" size="5xl">
        Blog.
      </Heading>
      <Link to="/blog">
        <SlidableBtn>view all posts</SlidableBtn>
      </Link>
    </Row>
    <Paragraph fontColor="primary-700" withLine size="xl">
      Learning new things is an integral part of every software engineer on a
      daily basis. Something that always characterized our industry is broad
      access to free resources. Learning in public is my way to give back some
      value to the community.
    </Paragraph>
    <BlogPosts>
      <Heading fontColor="primary-900" weight="bold" size="base">
        Latest posts.
      </Heading>
      {posts.map((post, idx) => (
        <PostItem>abc</PostItem>
      ))}
    </BlogPosts>
  </Container>
)

export default BlogSlide
