import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import handleViewport from 'react-in-viewport'
import { Title, Description } from '../../atoms/AnimatedText'
import TextHighlight from '../../atoms/TextHighlight'
import ProjectsGrid from '../../organisms/ProjectsGrid'
import BeforeNumber from '../../atoms/BeforeNumber'
import ProjectsSlider from '../../organisms/ProjectsSlider'
import ProjectInfo from '../../molecules/ProjectInfo'
import { ProjectsContext } from '../../../context/ProjectsContext'

const Container = styled.div`
  ${tw`relative w-full inline-flex flex-col justify-center items-start h-screen px-32`}
  overflow-x: hidden;
`

const Row = styled.div`
  ${tw`flex`}
`

const ProjectsRow = styled.div`
  ${tw`relative w-full flex items-center`}
  height: 50%;
`
const ViewportTitle = handleViewport(Title, {}, {})
//    <Title active={active}>Projects</Title>

const ProjectsSlide = () => (
  <Container>
    <Row>
      <BeforeNumber>02</BeforeNumber>
      <ViewportTitle>
        <TextHighlight size="3xl" height="xl">
          My recent works.
        </TextHighlight>
      </ViewportTitle>
    </Row>
    <ProjectsRow>
      <ProjectInfo />
      <ProjectsSlider />
    </ProjectsRow>
  </Container>
)

export default ProjectsSlide
