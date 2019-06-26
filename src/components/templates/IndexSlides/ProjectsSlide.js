import React from 'react'
import styled from 'styled-components'
import handleViewport from 'react-in-viewport'
import { Title, Description } from '../../atoms/AnimatedText'
import TextHighlight from '../../atoms/TextHighlight'
import ProjectsGrid from '../../organisms/ProjectsGrid'
import BeforeNumber from '../../atoms/BeforeNumber'

const Container = styled.div`
  ${tw`w-full inline-flex flex-col justify-center items-start h-screen px-32`}

  & > div, article {
    max-width: 1200px;
    width: 100%;
    margin: 2em auto;
  }
`

const Row = styled.div`
  ${tw`flex`}
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
  </Container>
)

export default ProjectsSlide
