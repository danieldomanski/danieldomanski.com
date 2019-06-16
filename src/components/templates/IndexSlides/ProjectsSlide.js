import React from 'react'
import styled from 'styled-components'
import { Title } from '../../atoms/AnimatedText'
import ProjectsGrid from '../../organisms/ProjectsGrid'
import Slide from './Slide'

const ProjectsSlide = ({ active }) => (
  <>
    <Title active={active}>Projects</Title>
    <ProjectsGrid />
  </>
)

export default ProjectsSlide
