import React from 'react'
import Box from '../../atoms/Box'
import Text from '../../atoms/Text'

const SlideHeading = ({ title, description }) => (
  <>
    <Box
      display="flex"
      flexDirection={['column', 'column', 'column', 'column', 'row']}
      alignItems={['flex-start', 'flex-start']}
    >
      <Text
        as="h2"
        fontFamily="sans"
        fontSize={['3xl', '4xl']}
        fontColor="primary.11"
        fontWeight="black"
        lineHeight="none"
        letterSpacing="-0.05em"
        flex={1}
        mr={8}
      >
        {title}
      </Text>
      <Text
        width={[1]}
        flex={[1, 1, 3]}
        fontSize={['lg', 'lg', 'xl']}
        fontColor="primary.11"
        fontWeight="medium"
        lineHeight="relaxed"
        letterSpacing="-0.05em"
        mt={[8, 8, 8, 8, 0]}
      >
        {description}
      </Text>
    </Box>
  </>
)

export default SlideHeading
