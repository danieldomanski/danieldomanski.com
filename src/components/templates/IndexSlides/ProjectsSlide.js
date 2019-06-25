import React from 'react'
import styled from 'styled-components'
import VisibilitySensor from 'react-visibility-sensor'
import { Title } from '../../atoms/AnimatedText'
import ProjectsGrid from '../../organisms/ProjectsGrid'

const Container = styled.section`
  ${tw`flex flex-col justify-center w-full h-screen `}
`

//    <Title active={active}>Projects</Title>

const ProjectsSlide = ({ active }) => (
  <VisibilitySensor>
    {({ inViewport }) => (
      <Container>
        <ProjectsGrid />
      </Container>
    )}
  </VisibilitySensor>
)

export default ProjectsSlide
