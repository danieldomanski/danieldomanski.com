import React from 'react'
import Text from './index'

const Title = ({ children }) => (
  <Text
    as="h1"
    display="block"
    fontFamily="sans"
    fontSize={['4xl', '5xl', '5xl', '5xl']}
    lineHeight="normal"
    fontWeight="black"
    fontColor="primary.11"
    textAlign="center"
    my={[8, 12, 12, 12, 16]}
    letterSpacing="-0.05em"
  >
    {children}
  </Text>
)

export default Title
