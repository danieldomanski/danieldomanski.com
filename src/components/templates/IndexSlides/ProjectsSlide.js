import React from 'react'
import styled from 'styled-components'
import { Title } from '../../atoms/AnimatedText'
import ProjectsGrid from '../../organisms/ProjectsGrid'

const Container = styled.section`
  ${tw`w-full`}

  max-height: 600px;
`

const ProjectsSlide = ({ active }) => (
  <Container>
    <Title active={active}>Projects</Title>
    <ProjectsGrid />
  </Container>
)

export default ProjectsSlide
