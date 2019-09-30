import React from 'react'
import Box from '../../atoms/Box'
import ProjectsContainer from "../ProjectsContainer"
import Slide from '../../templates/Slide'

const ProjectsSlide = ({ projects, content }) => (
  <Slide content={content} id="projects" to="/projects">
    <Box
      display="flex"
      flexDirection={['column', 'column', 'column', 'column', 'row']}
      justifyContent="space-between"
    >
      <ProjectsContainer projects={projects} />
    </Box>
  </Slide>
)

export default ProjectsSlide
