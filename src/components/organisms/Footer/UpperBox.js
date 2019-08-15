import React from 'react'
import styled from 'styled-components'
import Box from '../../atoms/Box'
import Text from '../../atoms/Text'

const UpperRect = ({ content }) => (
  <Box
    width={1}
    height="100%"
    display="flex"
    bg="primary.9"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    textAlign="center"
    px={[12, 12, 12, 32]}
    py={[16]}
  >
    <Text
      fontColor="secondary.1"
      fontSize={['3xl', '4xl', '5xl']}
      fontWeight="bold"
      mb={[0, 6]}
    >
      {content.title}
    </Text>
    <Text
      fontFamily="sans"
      fontSize={['base', 'xl']}
      fontColor="primary.2"
      maxWidth={1000}
      lineHeight="relaxed"
    >
      {content.description}
    </Text>
  </Box>
)

export default UpperRect
