import React from 'react'
import Text from './index'

const Title = ({ children }) => (
  <Text
    fontFamily={'sans'}
    fontSize={['3xl', '4xl', '4xl', '5xl']}
    lineHeight={'normal'}
    fontWeight={'black'}
    fontColor={'primary.11'}
    display={'block'}
    textAlign="center"
    mt={[8, 8, 8, 12, 16]}
    mb={[8, 8, 8, 12, 16]}
    style={{ letterSpacing: '-0.04em' }}
  >
    {children}
  </Text>
)

export default Title
