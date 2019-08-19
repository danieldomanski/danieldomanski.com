import React from 'react'
import styled from 'styled-components'
import SlidableButton from '../../atoms/Button/SlidableButton'
import Text from '../../atoms/Text'
import { LocalizedLink } from '../../atoms/Link'
import Box from '../../atoms/Box'
import Icon from '../../atoms/Icon'
import ProjectsGrid from '../../organisms/ProjectsGrid'
import HomeInfoRow from '../../molecules/HomeInfoRow'
import ArrowButton from '../../atoms/Button/ArrowButton'
import { DirectionalFade } from '../../molecules/AnimatedBox'

const ProjectsSlide = ({
  projects,
  content: { title, description, button },
}) => (
  <Box
    width={1}
    maxWidth={1400}
    m="auto"
    pt={[16, 24, 32]}
    pb={[16, 24, 48]}
    px={[6, 6, 12, 0, 0]}
  >
    <HomeInfoRow
      title={title}
      description={description}
      button={button}
      idx={2}
    />
    <ProjectsGrid projects={projects} />
    <Box textAlign="right" mt={20}>
      <LocalizedLink to="/blog" display={['none', 'none', 'block']}>
        <ArrowButton fontColor="primary.7" fontSize="lg">
          {button}
        </ArrowButton>
      </LocalizedLink>
    </Box>
  </Box>
)

export default ProjectsSlide
