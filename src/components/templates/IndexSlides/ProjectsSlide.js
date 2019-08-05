import React from 'react'
import styled from 'styled-components'
import ProjectsSlider from '../../organisms/ProjectsSlider'
import Button from '../../atoms/Button'
import SlidableButton from '../../atoms/Button/SlidableButton'
import Text from '../../atoms/Text'
import { Link } from '../../atoms/Link'
import Box from '../../atoms/Box'
import Icon from '../../atoms/Icon'
import ProjectsGrid from '../../organisms/ProjectsGrid'

const ProjectsSlide = ({ projects }) => (
  <Box maxWidth={1400} m="auto" pb={[24, 24, 64]}>
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      position="relative"
      px={[6, 6, 8, 12, 24]}
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
          fontSize={['4xl', '4xl', '6xl']}
        >
          Works
        </Text>
        <Link to="/projects" display={['none', 'none', 'block']}>
          <SlidableButton>view all projects</SlidableButton>
        </Link>
        <Box display={['flex', 'flex', 'none']} alignItems="center">
          <Text
            fontFamily="sans"
            fontSize="base"
            fontColor="accent.7"
            fontWeight="bold"
          >
            View all
          </Text>
          <Icon icon="caret" width={7} fill="#2E73FF" ml={2} />
        </Box>
      </Box>
      <Text
        fontFamily="sans"
        fontColor="primary.6"
        fontSize={['base', 'lg']}
        lineHeight="relaxed"
        maxWidth={900}
      >
        Learning new things is an integral part of every software engineer on a
        daily basis. Something that always characterized our industry is broad
        access to free resources. Learning in public is my way to give back some
        value to the community.
      </Text>
      <ProjectsGrid projects={projects} mt={16} />
    </Box>
  </Box>
)

export default ProjectsSlide
