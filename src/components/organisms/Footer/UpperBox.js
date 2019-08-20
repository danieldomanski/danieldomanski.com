import React from 'react'
import styled from 'styled-components'
import Box from '../../atoms/Box'
import Text from '../../atoms/Text'

const UpperRect = ({ content }) => (
  <Box
    width={1}
    height="100%"
    display="flex"
    bg="#1F262B"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    textAlign="center"
    px={[6, 8, 12]}
    py={[16, 16, 24]}
  >
    <Text
      fontColor="secondary.0"
      fontSize={['3xl', '4xl', '5xl']}
      fontWeight="black"
      pb={[6, 6, 6]}
    >
      {content.title}
    </Text>
    <Text
      fontFamily="sans"
      fontSize={['base', 'xl']}
      fontColor="primary.1"
      maxWidth={1000}
      lineHeight="relaxed"
    >
      {content.description}
    </Text>
  </Box>
)

export default UpperRect
