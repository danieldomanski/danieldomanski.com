import React from 'react'

import styled from 'styled-components'
import ProjectsSlider from '../../organisms/ProjectsSlider'
import SlidableButton from '../../atoms/Button/SlidableButton'
import Text from '../../atoms/Text'
import { Link } from '../../atoms/Link'
import Paragraph from '../../atoms/Paragraph'
import Box from '../../atoms/Box'
import { ContentWrapper } from '../../atoms/Wrapper'

const Row = styled.div`
  ${tw`flex justify-between items-center mt-16 mb-8`}
`

const ProjectsSlide = () => (
  <Box maxWidth={1400} m="auto" pt={48} pb={48}>
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      position="relative"
      px={[8, 12, 16, 24]}
    >
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
      <Text
        fontFamily="sans"
        fontColor="primary.6"
        fontSize="lg"
        lineHeight="relaxed"
        maxWidth={900}
      >
        Learning new things is an integral part of every software engineer on a
        daily basis. Something that always characterized our industry is broad
        access to free resources. Learning in public is my way to give back some
        value to the community.
      </Text>
      <ProjectsSlider />
    </Box>
  </Box>
)

export default ProjectsSlide
