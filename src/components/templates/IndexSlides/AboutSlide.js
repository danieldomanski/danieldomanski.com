import React from 'react'
import styled from 'styled-components'
import { Link } from '../../atoms/Link'
import Box from '../../atoms/Box'
import Text from '../../atoms/Text'
import Icon from '../../atoms/Icon'
import SlidableButton from '../../atoms/Button/SlidableButton'

const AboutSlide = () => (
  <Box
    maxWidth={1400}
    m="auto"
    pt={[16, 16, 64]}
    pb={[24, 24, 64]}
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
        fontSize={['4xl', '4xl', '6xl']}
        fontColor="primary.7"
        fontWeight="black"
      >
        About.
      </Text>
      <Link to="/blog" display={['none', 'none', 'block']}>
        <SlidableButton>view all posts</SlidableButton>
      </Link>
    </Box>
    <Text
      fontFamily="sans"
      fontSize={['base', 'lg']}
      fontColor="primary.6"
      lineHeight="relaxed"
      maxWidth={900}
    >
      Learning new things is an integral part of every software engineer on a
      daily basis. Something that always characterized our industry is broad
      access to free resources. Learning in public is my way to give back some
      value to the community.
    </Text>
    <Box display={['flex', 'flex', 'none']} mt={12} justifyContent="center">
      <Link to="/blog">
        <SlidableButton>view all posts</SlidableButton>
      </Link>
    </Box>
  </Box>
)

export default AboutSlide
