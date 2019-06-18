import React from 'react'
import styled from 'styled-components'
import { Title } from '../../atoms/AnimatedText'
import ProjectsGrid from '../../organisms/ProjectsGrid'
import Slide from './Slide'
import ProjectsProvider from '../../../context/ProjectsContext'

const ProjectsSlide = ({ active }) => (
  <>
    <Title active={active}>Projects</Title>
    <ProjectsGrid />
  </>
)

export default ProjectsSlide
