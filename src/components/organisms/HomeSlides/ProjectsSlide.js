import React from 'react'
import Text from '../../atoms/Text'
import Box from '../../atoms/Box'
import ProjectItem from '../../molecules/ProjectItem'
import ProjectsGrid from '../../molecules/ProjectsGrid'
import Slide from '../../templates/Slide'

const ProjectsSlide = ({ projects, content }) => (
  <Slide content={content}>
    <Box
      display="flex"
      flexDirection={['column', 'column', 'column', 'column', 'row']}
      justifyContent="space-between"
      mt={[12, 12, 16, 24]}
      mb={[8, 12, 16, 24]}
    >
      <ProjectsGrid>
        {projects.map((project, idx) => {
          const last = idx === projects.length - 1
          return (
            <ProjectItem
              project={project}
              mb={last ? 0 : [10, 10, 12]}
              mr={idx === 0 ? [0, 0, 0, 4, 8] : 0}
              ml={idx === 1 ? [0, 0, 0, 4, 8] : 0}
            />
          )
        })}
      </ProjectsGrid>
    </Box>
  </Slide>
)

export default ProjectsSlide
