import React from 'react'
import Box from '../../atoms/Box'
import Text from '../../atoms/Text'

const HomeInfoRow = ({ title, description }) => (
  <Box
    as="header"
    display="flex"
    flexDirection={['column', 'column', 'column', 'column', 'row']}
    justifyContent="space-between"
    alignItems={['center', 'flex-start']}
  >
    <Box minWidth={[0, 0, 250]} flexGrow={1}>
      <Text
        fontFamily="sans"
        display={['block']}
        fontSize={['3xl', '3xl', '4xl']}
        fontColor="primary.11"
        fontWeight="black"
        lineHeight="tight"
        style={{ letterSpacing: '-0.04em' }}
      >
        {title}.
      </Text>
    </Box>
    <Text
      width={1}
      flexGrow={[1, 1, 3]}
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

export default HomeInfoRow
