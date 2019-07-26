import React from 'react'
import styled from 'styled-components'
import { Link } from '../../atoms/Link'
import Box from '../../atoms/Box'
import Text from '../../atoms/Text'
import Icon from '../../atoms/Icon'
import SlidableButton from '../../atoms/Button/SlidableButton'

const AboutSlide = () => (
  <Box maxWidth={1400} m="auto" pb={48} px={[8, 12, 16, 24]}>
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mb={8}
    >
      <Text fontSize="5xl" fontColor="primary.7" fontWeight="black">
        About.
      </Text>
      <Link to="/blog">
        <SlidableButton>get to know me better</SlidableButton>
      </Link>
    </Box>
    <Text
      fontFamily="sans"
      fontSize="lg"
      fontColor="primary.6"
      lineHeight="relaxed"
      maxWidth={900}
    >
      Learning new things is an integral part of every software engineer on a
      daily basis. Something that always characterized our industry is broad
      access to free resources. Learning in public is my way to give back some
      value to the community.
    </Text>
  </Box>
)

export default AboutSlide
