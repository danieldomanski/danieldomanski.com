import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Box from '../../atoms/Box'
import Text from '../../atoms/Text'

const UpperRect = ({ content }) => (
  <Box
    width={1}
    height="100%"
    display="flex"
    bg="grey.2"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    textAlign="center"
    px={[12, 12, 12, 32]}
    py={12}
  >
    <Text
      fontColor="primary.1"
      fontSize={['4xl', '5xl']}
      fontWeight="bold"
      mb={[0, 4]}
    >
      {content.title}
    </Text>
    <Text
      fontSize={['lg']}
      fontColor="primary.5"
      my={[4]}
      maxWidth={1000}
      lineHeight="relaxed"
    >
      {content.description}
    </Text>
  </Box>
)

export default UpperRect
