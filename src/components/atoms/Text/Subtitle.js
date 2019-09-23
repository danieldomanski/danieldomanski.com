import React from 'react'
import Text from '../Text'

const Subtitle = ({ children }) => (
  <Text
    as="h3"
    display="block"
    fontSize={['base', 'lg', 'xl', 'xl']}
    fontWeight="black"
    fontColor="primary.5"
    mb={[12, 12, 12, 12, 16]}
    flex={1}
    style={{ textTransform: 'uppercase' }}
  >
    {children}
  </Text>
)

export default Subtitle
