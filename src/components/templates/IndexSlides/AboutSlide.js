import React from 'react'
import styled from 'styled-components'
import { Link } from '../../atoms/Link'
import Box from '../../atoms/Box'
import Text from '../../atoms/Text'
import Icon from '../../atoms/Icon'
import SlidableButton from '../../atoms/Button/SlidableButton'
import Button from '../../atoms/Button'

const AboutSlide = () => (
  <Box
    maxWidth={1400}
    m="auto"
    pt={[16, 16, 64]}
    pb={[24, 24, 64]}
    px={[6, 6, 12, 16, 24]}
  >
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      mb={[4, 4, 8]}
    >
      <Text
        fontSize={['4xl', '4xl', '6xl']}
        fontColor="primary.7"
        fontWeight="black"
      >
        About
      </Text>
      <Link to="/blog" display={['none', 'none', 'block']}>
        <SlidableButton>view all posts</SlidableButton>
      </Link>
      <Link to="/blog" display={['block', 'block', 'none']}>
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
  </Box>
)

export default AboutSlide
