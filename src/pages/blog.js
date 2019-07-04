import React from 'react'
import styled from 'styled-components'
import Layout from '../components/templates/Layout'
import Header from '../components/organisms/Header'
import Heading from '../components/atoms/Heading'
import Paragraph from '../components/atoms/Paragraph'
import { ContentWrapper } from '../components/atoms/Wrapper'
import { CollapsableLink } from '../components/atoms/Link'
import PostItem from '../components/organisms/PostItem'

const tags = ['React', 'CSS', 'JavaScript', 'Web Design']

const posts = ['abc', 'bca', 'cba']

const TopLayer = styled.section`
  ${tw`w-full fixed h-screen`}
  z-index: 4;
  padding-top: 120px;
`

const ContentFilters = styled.ul`
  ${tw`flex m-auto`}
  list-style: none;
`

const Filter = styled.li`
  ${tw`font-sans flex justify-between pl-8 py-3 bg-primary-800 text-primary-200 mx-2 shadow rounded`}
`

const Count = styled.span`
  ${tw`px-8`}
`

const BlogPosts = styled.ul`
  ${tw`py-12`}
  list-style: none;
`

const BlogContent = styled(ContentWrapper)`
  ${tw`py-8`}
  max-width: 1000px;
`

const Blog = () => (
  <Layout>
    <Header variant="secondary" />
    <TopLayer>
      <ContentWrapper>
        <Heading fontColor="primary-800" weight="black" size="5xl">
          Blog
        </Heading>
        <Paragraph fontColor="primary-700" size="lg" withLine my={12}>
          “You already know that you will never be done learning. But most
          people "learn in private", and lurk. They consume content without
          creating any themselves. Whatever your thing is, make the thing you
          wish you had found when you were learning. The biggest beneficiary of
          you trying to help past you is future you. If others benefit, that's
          icing.”
        </Paragraph>
        <CollapsableLink
          fontColor="primary-700"
          underlineColor="primary-300"
          hoverColor="primary-900"
        >
          shawn wang, swyx.io
        </CollapsableLink>
      </ContentWrapper>
      <BlogContent>
        <ContentFilters>
          {tags.map((tag, idx) => (
            <Filter>
              {tag}
              <Count>1</Count>
            </Filter>
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
