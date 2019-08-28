import React from 'react'
import Box from '../../atoms/Box'
import Text from '../../atoms/Text'
import HomeParticles from '../../molecules/HomeParticles'

const UpperRect = ({ content }) => (
  <>
    <Box
      width={1}
      height="100%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      px={[6, 8, 12]}
      py={[16, 16, 0]}
    >
      <HomeParticles variant="footer" />
      <Text
        fontFamily="sans"
        lineHeight="tight"
        fontSize={['4xl', '4xl', '5xl']}
        fontColor={['primary.10', 'secondary.9', 'secondary.0']}
        mb={6}
        fontWeight="bold"
      >
        {content.title}
      </Text>
      <Text
        fontFamily="sans"
        maxWidth={1200}
        fontWeight="normal"
        fontSize={['lg', 'lg', 'xl', 'xl']}
        fontColor={['primary.10', 'primary.10', 'secondary.7']}
        lineHeight="relaxed"
      >
        {content.description}
      </Text>
    </Box>
  </>
)

export default UpperRect
