import React from 'react'
import { LocalizedLink } from '../../atoms/Link'
import Box from '../../atoms/Box'
import ProjectsGrid from '../../organisms/ProjectsGrid'
import HomeInfoRow from '../../molecules/HomeInfoRow'
import ArrowButton from '../../atoms/Button/ArrowButton'

const ProjectsSlide = ({
  projects,
  content: { title, description, button },
}) => (
  <Box
    width={1}
    maxWidth={1400}
    m="auto"
    px={[8, 8, 12, 12, 16, 16]}
    py={[8, 12, 16, 32]}
  >
    <HomeInfoRow
      title={title}
      description={description}
      button={button}
      idx={2}
    />
    <ProjectsGrid projects={projects} />
    <Box textAlign={['center', 'left', 'right']} mt={[16, 24, 24]}>
      <LocalizedLink to="/projects" display={['block']}>
        <ArrowButton fontColor="cosmic.2" fontSize={['sm', 'base', 'base']}>
          {button}
        </ArrowButton>
      </LocalizedLink>
    </Box>
  </Box>
)

export default ProjectsSlide
