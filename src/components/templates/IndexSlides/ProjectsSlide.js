import React from 'react'
import styled from 'styled-components'
import { Title } from '../../atoms/AnimatedText'
import ProjectsGrid from '../../organisms/ProjectsGrid'
import { CenteredAbsoluteWrapper } from '../../atoms/Wrapper'

const Container = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0vw;
  top: 200vh;
`

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin: auto;
`

const ProjectsSlide = ({ active }) => (
  <Container>
    <Wrapper>
      <CenteredAbsoluteWrapper active={active}>
        <Title active={active}>Projects</Title>
        <ProjectsGrid />
      </CenteredAbsoluteWrapper>
    </Wrapper>
  </Container>
)

export default ProjectsSlide
