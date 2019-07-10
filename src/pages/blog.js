import React from 'react'
import styled from 'styled-components'
import Layout from '../components/templates/Layout'
import Header from '../components/organisms/Header'
import Text from '../components/atoms/Text'
import Paragraph from '../components/atoms/Paragraph'
import { ContentWrapper } from '../components/atoms/Wrapper'
import { CollapsableLink } from '../components/atoms/Link'
import PostItem from '../components/organisms/PostItem'
import Filter from '../components/atoms/Filter'

const tags = ['React', 'CSS', 'JavaScript', 'Web Design']

const posts = [
  'abc',
  'bca',
  'cba',
  'abc',
  'bca',
  'cba',
  'abc',
  'bca',
  'cba',
  'abc',
  'bca',
  'cba',
]

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
  max-width: 1000px;
`
const Row = styled(ContentWrapper)`
  ${tw`text-right`}
  max-width: 1000px;
`

const Blog = () => (
  <Layout>
    <Header variant="secondary" />
    <TopLayer>
      <ContentWrapper>
        <Text fontColor="primary-800" weight="black" size="5xl" my={4}>
          Blog
        </Text>
        <Paragraph fontColor="primary-700" size="lg" withLine my={4}>
          “You already know that you will never be done learning. But most
          people "learn in private", and lurk. They consume content without
          creating any themselves. Whatever your thing is, make the thing you
          wish you had found when you were learning. The biggest beneficiary of
          you trying to help past you is future you. If others benefit, that's
          icing.”
        </Paragraph>
        <Row>
          <CollapsableLink variant="bright">
            shawn wang, swyx.io
          </CollapsableLink>
        </Row>
      </ContentWrapper>
      <BlogContent>
        <ContentFilters>
          {tags.map((tag, idx) => (
            <Filter>{tag}</Filter>
          ))}
        </ContentFilters>
        <BlogPosts>
          {posts.map((post, idx) => (
            <PostItem>abc</PostItem>
          ))}
        </BlogPosts>
      </BlogContent>
    </TopLayer>
  </Layout>
)

export default Blog
