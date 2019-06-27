import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import handleViewport from 'react-in-viewport'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import { Title, Description } from '../../atoms/AnimatedText'
import TextHighlight from '../../atoms/TextHighlight'
import ProjectsSlider from '../../organisms/ProjectsSlider'
import { SlidableBtn } from '../../atoms/Button'

const Container = styled(ParallaxLayer)`
  ${tw` w-full h-screen bg-primary-300`}
  overflow-x: hidden;
`
const Wrapper = styled.main`
  ${tw`relative w-full flex flex-col justify-center w-full px-12`}
  height: 100%;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
`

const Row = styled.div`
  ${tw`flex `}
`

const ViewportTitle = handleViewport(Title, {}, {})

const ProjectsSlide = () => (
  <Container offset={1}>
    <Wrapper>
      <Row>
        <ViewportTitle>
          <TextHighlight
            size="3xl"
            height="xl"
            fontColor="primary-800"
            underlineColor="primary-400"
          >
            My recent works.
          </TextHighlight>
        </ViewportTitle>
      </Row>
      <ProjectsSlider />
      <SlidableBtn>view all projects</SlidableBtn>
    </Wrapper>
  </Container>
)

export default ProjectsSlide
