import React from 'react'
import styled from 'styled-components'
import Heading from '../../atoms/Heading'
import Paragraph from '../../atoms/Paragraph'
import { SlidableBtn } from '../../atoms/Button'
import PostItem from '../../organisms/PostItem'

const posts = ['abc', 'bca', 'cba']

const Container = styled.div`
  ${tw`py-32 m-auto`}
  max-width: 1400px;
`

const Row = styled.div`
  ${tw`flex justify-between my-12`}
`

const BlogPosts = styled.ul`
  ${tw`m-auto py-8`}
  max-width: 800px;
  margin: 0 auto;
  list-style: none;
`

const ContactSlide = () => (
  <Container>
    <Row>
      <Heading fontColor="primary-900" weight="bold">
        Blog.
      </Heading>
      <SlidableBtn>view all projects</SlidableBtn>
    </Row>
    <Paragraph fontColor="primary-700" withLine size="xl">
      Learning new things is an integral part of every software engineer on a
      daily basis. Something that always characterized our industry is broad
      access to free resources. Learning in public is my way to give back some
      value to the community.
    </Paragraph>
    <BlogPosts>
      {posts.map((post, idx) => (
        <PostItem>abc</PostItem>
      ))}
    </BlogPosts>
  </Container>
)

export default ContactSlide
