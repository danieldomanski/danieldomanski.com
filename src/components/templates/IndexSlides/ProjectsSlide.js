import React, { useContext, useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import handleViewport from 'react-in-viewport'
import ProjectsSlider from '../../organisms/ProjectsSlider'
import { SlidableBtn } from '../../atoms/Button'
import Heading from '../../atoms/Heading'
import Paragraph from '../../atoms/Paragraph'
import { ContentWrapper } from '../../atoms/Wrapper'

const Container = styled.div`
  ${tw`py-12 px-20 m-auto `}
`
const Wrapper = styled(ContentWrapper)`
  ${tw`relative w-full h-full flex flex-col justify-center`}
`

const Row = styled.div`
  ${tw`flex justify-between my-12`}
`

const ProjectsSlide = () => (
  <Container>
    <Wrapper>
      <Row>
        <Heading fontColor="primary-900" weight="bold">
          Works.
        </Heading>
        <Link to="/projects">
          <SlidableBtn>view all projects</SlidableBtn>
        </Link>
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
