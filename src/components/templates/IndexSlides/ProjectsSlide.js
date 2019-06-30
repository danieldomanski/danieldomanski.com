import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import handleViewport from 'react-in-viewport'
import { Title, Description } from '../../atoms/AnimatedText'
import TextHighlight from '../../atoms/TextHighlight'
import ProjectsSlider from '../../organisms/ProjectsSlider'
import { SlidableBtn } from '../../atoms/Button'
import Heading from '../../atoms/Heading'
import Paragraph from '../../atoms/Paragraph'

const Container = styled.div`
  ${tw`py-32 px-12 m-auto h-screen`}
`
const Wrapper = styled.main`
  ${tw`relative w-full h-full flex flex-col justify-center`}
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
`

const Row = styled.div`
  ${tw`flex justify-between my-12`}
`

const ViewportTitle = handleViewport(Title, {}, {})

const ProjectsSlide = () => (
  <Container>
    <Wrapper>
      <Row>
        <Heading fontColor="primary-900" weight="bold">
          Works.
        </Heading>
        <SlidableBtn>view all projects</SlidableBtn>
      </Row>
      <Paragraph fontColor="primary-700" withLine size="xl">
        Learning new things is an integral part of every software engineer on a
        daily basis. Something that always characterized our industry is broad
        access to free resources. Learning in public is my way to give back some
        value to the community.
      </Paragraph>
      <ProjectsSlider />
    </Wrapper>
  </Container>
)

export default ProjectsSlide
