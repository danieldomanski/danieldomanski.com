import React from 'react'
import styled from 'styled-components'
import Layout from '../components/templates/Layout'
import Header from '../components/organisms/Header'
import ProjectGrid from '../components/organisms/ProjectsGrid'

const BlogContainer = styled.section`
  ${tw`w-full h-full`}
`

const TopLayer = styled.section`
  ${tw`w-full fixed h-screen`}
  z-index: 5;
  margin-top: 100px;
`

const Blog = () => (
  <Layout>
    <Header variant="secondary" />
    <TopLayer>
      <BlogContainer>Blog</BlogContainer>
    </TopLayer>
  </Layout>
)

export default Blog
