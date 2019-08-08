import React from 'react'
import styled from 'styled-components'
import SlidableButton from '../../atoms/Button/SlidableButton'
import Text from '../../atoms/Text'
import { LocalizedLink } from '../../atoms/Link'
import Box from '../../atoms/Box'
import Icon from '../../atoms/Icon'
import ProjectsGrid from '../../organisms/ProjectsGrid'

const ProjectsSlide = ({ projects, content }) => (
  <Box
    maxWidth={1400}
    display="flex"
    flexDirection="column"
    justifyContent="center"
    position="relative"
    px={[6, 6, 8, 12, 24]}
    pb={[24, 24, 64]}
    m="auto"
  >
    <Box
      display="flex"
      justifyContent={['space-between']}
      alignItems="center"
      mb={[4, 4, 8]}
    >
      <Text
        fontColor="primary.7"
        fontWeight="black"
        fontSize={['4xl', '4xl', '5xl']}
      >
        {content.title}
      </Text>
      <LocalizedLink to="/projects" display={['none', 'none', 'block']}>
        <SlidableButton>{content.button}</SlidableButton>
      </LocalizedLink>
      <LocalizedLink to="/about" display={['block', 'block', 'none']}>
        <Box display={['flex', 'flex', 'none']} alignItems="center">
          <Text
            fontFamily="sans"
            fontSize="base"
            fontColor="accent.7"
            fontWeight="bold"
          >
            {content.button}
          </Text>
          <Icon icon="caret" width={7} fill="#2E73FF" ml={2} />
        </Box>
      </LocalizedLink>
    </Box>
    <ProjectsGrid projects={projects} mt={8} />
  </Box>
)

export default ProjectsSlide
