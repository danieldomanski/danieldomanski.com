import React from 'react'
import styled from 'styled-components'
import Layout from '../Layout'

const ProjectInfoWrapper = styled.section`
  ${tw`w-1/2 h-screen relative`}
`

const ProjectFixedInfo = styled.div`
  ${tw`fixed bg-primary-300 pin-r`};

  width: 50%;
  height: 100%;
  transform: matrix(1, 0, 0, 1, 0, 0);
`

const FixedSection = styled.article`
  ${tw`h-screen w-full`}
`

const Project = ({ pageContext }) => {
  console.log({ pageContext })
  return (
    <Layout>
      <ProjectInfoWrapper>
        <ProjectFixedInfo>
          <h1>Project!</h1>
          <FixedSection>abc</FixedSection>
          <FixedSection>222</FixedSection>
        </ProjectFixedInfo>
      </ProjectInfoWrapper>
    </Layout>
  )
}

export default Project
