import React, { forwardRef } from 'react'

import styled from 'styled-components'
import handleViewport from 'react-in-viewport'
import { useSpring, animated } from 'react-spring'
import ProjectsSlider from '../../organisms/ProjectsSlider'
import SlidableButton from '../../atoms/Button/SlidableButton'
import Text from '../../atoms/Text'
import { Link } from '../../atoms/Link'
import Box from '../../atoms/Box'
import AnimatedBox from '../../atoms/AnimatedText/AnimatedBox'

const ViewportAnimatedRow = handleViewport(AnimatedBox, {}, {})
const ViewportAnimatedText = handleViewport(AnimatedBox, {}, {})

const ProjectsSlide = () => (
  <Box maxWidth={1400} m="auto" pt={48} pb={48}>
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      position="relative"
      px={[8, 12, 16, 24]}
    >
      <ViewportAnimatedRow delayTime={0}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={8}
        >
          <Text fontColor="primary.7" fontWeight="black" fontSize="5xl">
            Works.
          </Text>
          <Link to="/projects">
            <SlidableButton>view all projects</SlidableButton>
          </Link>
        </Box>
      </ViewportAnimatedRow>
      <ViewportAnimatedText delayTime={250}>
        <Text
          fontFamily="sans"
          fontColor="primary.6"
          fontSize="lg"
          lineHeight="relaxed"
          maxWidth={900}
        >
          Learning new things is an integral part of every software engineer on
          a daily basis. Something that always characterized our industry is
          broad access to free resources. Learning in public is my way to give
          back some value to the community.
        </Text>
      </ViewportAnimatedText>

      <ProjectsSlider />
    </Box>
  </Box>
)

export default ProjectsSlide
