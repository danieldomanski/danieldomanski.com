import React from 'react'
import styled from 'styled-components'
import CrossedHeading from '../../atoms/CrossedHeading'
import ProjectsGrid from '../ProjectsGrid'

const Container = styled.section`
  ${tw`w-full inline-flex flex-col items-center my-8`};
  box-sizing: border-box;
`

const IndexProjects = () => (
  <Container>
    <CrossedHeading>Works</CrossedHeading>
    <ProjectsGrid />
  </Container>
)

export default IndexProjects
