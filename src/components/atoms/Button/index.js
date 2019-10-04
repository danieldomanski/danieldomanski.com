import React from 'react'
import Box from '../Box'
import Text from '../Text'

const Button = () => (
  <Box
    as="button"
    display="inline-block"
    py={6}
    px={8}
    bg="white"
    boxShadow="lg"
    border="1px solid rgba(0,0,0,0.1)"
  >
    <Text
      fontWeight="bold"
      fontSize={['sm', 'sm', 'base', 'lg']}
      fontColor="primary.11"
      style={{ textTransform: 'uppercase' }}
    >
      Zobacz na żywo
    </Text>
  </Box>
)

export default Button
