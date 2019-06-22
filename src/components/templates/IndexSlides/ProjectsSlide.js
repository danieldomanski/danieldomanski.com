import React from 'react'
import styled from 'styled-components'
import { Title } from '../../atoms/AnimatedText'
import ProjectsGrid from '../../organisms/ProjectsGrid'

const Container = styled.section`
  ${tw`flex flex-col justify-center w-full h-full `}
`

//    <Title active={active}>Projects</Title>

const ProjectsSlide = ({ active }) => (
  <Container>
    <ProjectsGrid />
  </Container>
)

export default ProjectsSlide
