import React from 'react'
import styled from 'styled-components'
import Box from '../../atoms/Box'
import Text from '../../atoms/Text'
import HomeParticles from '../../molecules/HomeParticles'

const Line = styled.span`
  ${tw`m-auto my-10`}
  display: block;

  width: 80px;
  height: 4px;
  background-color: #a0a6b2;
  opacity: 0.8;
`

const UpperRect = ({ content }) => (
  <>
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      mx={[6, 8, 12]}
      py={[16, 16, 32]}
      borderTop="1px solid rgba(0,0,0,0.1)"
    >
      <HomeParticles variant="footer" />
      <Text
        lineHeight="tight"
        fontSize={['2xl', '3xl', '5xl']}
        fontColor={['primary.10', 'primary.10', 'secondary.1']}
        mb={[8, 6, 6]}
        fontWeight="bold"
      >
        Chcesz ze mną{' '}
        <Text
          fontFamily="serif"
          fontSize={['2xl', '3xl', '5xl']}
          fontColor={['primary.10', 'primary.10', 'secondary.1']}
          fontWeight="bold"
          style={{
            fontStyle: 'italic',
          }}
        >
          pracować?
        </Text>
      </Text>
      <Text
        fontSize={['lg', 'lg', 'xl']}
        fontColor={['primary.10', 'primary.10', 'cosmic.4']}
        fontWeight="medium"
        style={{
          textTransform: 'uppercase',
          letterSpacing: '3.5px',
        }}
      >
        {content.title}
      </Text>
      <Line />

      <Text
        fontFamily="serif"
        maxWidth={900}
        fontWeight="normal"
        fontSize={['lg', 'lg', 'lg', 'lg']}
        fontColor={['primary.7', 'primary.7', 'cosmic.4']}
        lineHeight="loose"
      >
        {content.description}
      </Text>
    </Box>
  </>
)

export default UpperRect
