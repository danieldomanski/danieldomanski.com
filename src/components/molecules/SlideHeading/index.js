import React from 'react'
import Box from '../../atoms/Box'
import Text from '../../atoms/Text'

const SlideHeading = ({ title, description }) => (
  <Box
    as="header"
    display="flex"
    flexDirection={['column', 'column', 'column', 'column', 'row']}
    alignItems={['flex-start', 'flex-start']}
    mb={16}
  >
    <Text
      fontFamily="sans"
      display={['block']}
      fontSize={['3xl', '3xl', '4xl']}
      fontColor="primary.11"
      fontWeight="black"
      lineHeight="tight"
      style={{ letterSpacing: '-0.04em' }}
      flex={1}
    >
      {title}.
    </Text>
    <Text
      width={[1]}
      flex={[1, 1, 3]}
      fontSize={['base', 'lg', 'xl']}
      fontColor="primary.9"
      fontWeight="medium"
      lineHeight="relaxed"
      style={{ letterSpacing: '-0.02em' }}
      mt={[6, 8, 8, 8, 0]}
    >
      {description}
    </Text>
  </Box>
)

export default SlideHeading
