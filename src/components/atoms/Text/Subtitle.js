import React from 'react'
import Text from '.'

const Subtitle = ({ children, ...rest }) => (
  <Text
    as="h3"
    display="block"
    fontSize={['lg', 'lg', 'xl', 'xl']}
    fontWeight="black"
    fontColor="primary.5"
    mb={[6, 8, 12, 12, 16]}
    flex={1}
    style={{ textTransform: 'uppercase' }}
    {...rest}
  >
    {children}
  </Text>
)

export default Subtitle
