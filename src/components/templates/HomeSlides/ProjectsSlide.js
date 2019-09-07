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
  <Box
    width={1}
    maxWidth={1400}
    m="auto"
    px={[8, 12, 16, 20, 24, 0]}
    py={[12, 16, 20, 32]}
  >
    <HomeInfoRow
      title={title}
      description={description}
      button={button}
      idx={2}
    />
    <ProjectsGrid>
      {projects.map((project, idx) => {
        const { title } = project.node.data

        return (
          <>
            <Text
              display={['inline-block', 'inline-block', 'none']}
              fontFamily="sans"
              fontColor="primary.7"
              fontSize={['xl', '3xl']}
              fontWeight="medium"
              mb={[0, 0, 8]}
            >
              {title.text}
            </Text>
            <ProjectItem project={project} mb={4} />
          </>
        )
      })}
    </ProjectsGrid>
    <Box textAlign={['center', 'left', 'right']} mt={[12, 16, 24, 24]}>
      <LocalizedLink to="/projects" display={['block']}>
        <ArrowButton fontColor="cosmic.2" fontSize={['sm', 'base', 'base']}>
          {button}
        </ArrowButton>
      </LocalizedLink>
    </Box>
  </Box>
)

export default ProjectsSlide
