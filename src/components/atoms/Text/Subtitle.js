import React from 'react'
import Text from '.'

const Subtitle = ({ children, ...rest }) => (
  <Text
    as="h3"
    display="block"
    fontSize={['lg', 'lg', 'xl', 'xl']}
    fontWeight="black"
    fontColor="primary.11"
    mb={[8, 8, 12, 12, 16]}
    align="center"
    flex={1}
    lineHeight="loose"
    letterSpacing="-.0em"
    style={{ textTransform: 'uppercase' }}
    {...rest}
  >
    {children}
  </Text>
)

export default Subtitle
