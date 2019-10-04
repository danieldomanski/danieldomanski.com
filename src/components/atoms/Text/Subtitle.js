import React from 'react'
import Text from '.'

const Subtitle = ({ children, ...rest }) => (
  <Text
    as="h3"
    display="block"
    fontSize={['lg', 'lg', 'xl', 'xl']}
    fontWeight="bold"
    fontColor="primary.11"
    mb={[8, 8, 12, 12, 16]}
    flex={1}
    style={{ textTransform: 'uppercase' }}
    {...rest}
  >
    {children}
  </Text>
)

export default Subtitle
