import React from 'react'
import styled from 'styled-components'
import ProjectsSlider from '../../organisms/ProjectsSlider'
import SlidableButton from '../../atoms/Button/SlidableButton'
import Text from '../../atoms/Text'
import { Link } from '../../atoms/Link'
import Box from '../../atoms/Box'

const ProjectsSlide = () => (
  <Box maxWidth={1400} m="auto" pb={[24, 24, 64]}>
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      position="relative"
      px={[6, 6, 12, 16, 24]}
      textAlign={['center', 'center', 'left']}
    >
      <Box
        display="flex"
        justifyContent={['center', 'center', 'space-between']}
        alignItems="center"
        mb={[4, 4, 8]}
      >
        <Text
          fontColor="primary.7"
          fontWeight="black"
          fontSize={['4xl', '4xl', '6xl']}
        >
          Works.
        </Text>
        <Link to="/projects" display={['none', 'none', 'block']}>
          <SlidableButton>view all projects</SlidableButton>
        </Link>
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
      <ProjectsSlider />
      <Box display={['flex', 'flex', 'none']} mt={12} justifyContent="center">
        <Link to="/blog">
          <SlidableButton>view all posts</SlidableButton>
        </Link>
      </Box>
    </Box>
  </Box>
)

export default ProjectsSlide
