import React from 'react'
import Text from '../../atoms/Text'
import Box from '../../atoms/Box'
import ProjectItem from '../../molecules/ProjectItem'
import ProjectsGrid from '../../molecules/ProjectsGrid'
import Slide from '../../templates/Slide'

const ProjectsSlide = ({ projects, content }) => (
  <Slide content={content} to="/projects">
    <Box
      display="flex"
      flexDirection={['column', 'column', 'column', 'column', 'row']}
      justifyContent="space-between"
    >
      <ProjectsGrid projects={projects} />
    </Box>
  </Slide>
)

export default ProjectsSlide
