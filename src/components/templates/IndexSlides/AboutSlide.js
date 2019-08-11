import React from 'react'
import styled from 'styled-components'
import { LocalizedLink } from '../../atoms/Link'
import Box from '../../atoms/Box'
import Text from '../../atoms/Text'
import Icon from '../../atoms/Icon'
import SlidableButton from '../../atoms/Button/SlidableButton'

const AboutSlide = ({ content }) => (
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
        fontSize={['4xl', '4xl', '5xl']}
        fontColor="primary.8"
        fontWeight="black"
      >
        {content.title}
      </Text>
      <LocalizedLink to="/about" display={['none', 'none', 'block']}>
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
    <Text
      fontFamily="sans"
      fontSize={['base', 'lg']}
      fontColor="primary.7"
      fontWeight="normal"
      lineHeight="loose"
      maxWidth={900}
    >
      {content.description}
    </Text>
  </Box>
)

export default AboutSlide
