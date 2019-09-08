import React from 'react'
import { LocalizedLink } from '../../atoms/Link'
import Box from '../../atoms/Box'
import Text from '../../atoms/Text'
import ProjectsGrid from '../../molecules/ProjectsGrid'
import HomeInfoRow from '../../molecules/HomeInfoRow'
import ArrowButton from '../../atoms/Button/ArrowButton'
import ProjectItem from '../../molecules/ProjectItem'

const ProjectsSlide = ({
  projects,
  content: { title, description, button },
}) => (
  <Box width={1} maxWidth={1400} m="auto" px={[8, 8, 24]} py={[12, 16, 20, 24]}>
    <HomeInfoRow title={title} description={description} button={button} />
    <ProjectsGrid mt={[12, 16, 24]} mb={[8, 12, 20]}>
      {projects.map((project, idx) => {
        const { title } = project.node.data

        return (
          <>
            <Text
              display={['inline-block', 'inline-block', 'none']}
              fontFamily="sans"
              fontColor="primary.7"
              fontSize={['lg', 'xl']}
              fontWeight="black"
              mb={[0, 0, 8]}
            >
              {title.text}
            </Text>
            <ProjectItem project={project} mb={8} />
          </>
        )
      })}
    </ProjectsGrid>
    <Box textAlign={['left', 'left', 'right']}>
      <LocalizedLink to="/projects" display={['block']}>
        <ArrowButton fontColor="cosmic.2" fontSize={['sm', 'base', 'base']}>
          {button}
        </ArrowButton>
      </LocalizedLink>
    </Box>
  </Box>
)

export default ProjectsSlide
