import React from 'react'
import styled from 'styled-components'
import Layout from '../components/templates/Layout'
import Header from '../components/organisms/Header'
import ProjectGrid from '../components/organisms/ProjectsGrid'
import Heading from '../components/atoms/Heading'
import { ContentWrapper } from '../components/atoms/Wrapper'

const TopLayer = styled.section`
  ${tw`absolute w-full py-12 px-12`}
  top: 160px;
  z-index: 5;
`

const Blog = () => (
  <Layout>
    <Header variant="secondary" />
    <TopLayer>
      <ContentWrapper>
        <Heading fontColor="primary-800" weight="black" size="6xl">
          Projects.
        </Heading>
        <ProjectGrid />
      </ContentWrapper>
    </TopLayer>
  </Layout>
)

export default Blog
