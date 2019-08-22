import React from 'react'
import styled from 'styled-components'
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
      py={[16, 16, 16]}
    >
      <HomeParticles />
      <Text
        fontColor="secondary.3"
        fontSize={['3xl', '4xl', '5xl']}
        fontWeight="black"
        pb={[6, 6, 6]}
      >
        {content.title}
      </Text>
      <Text
        fontFamily="sans"
        fontSize={['base', 'xl']}
        fontColor="secondary.8"
        maxWidth={1000}
        lineHeight="relaxed"
      >
        {content.description}
      </Text>
    </Box>
  </>
)

export default UpperRect
