import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import Box from '../../atoms/Box'
import Text from '../../atoms/Text'

const Line = styled.span`
  ${tw`mt-1 md:mt-3`}
  display: block;
  width: 60px;
  height: 4px;

  background-color: #181818;
`

const HomeInfoRow = ({ title, description }) => (
  <>
    <Box
      as="header"
      display="flex"
      flexDirection={['column', 'column', 'column', 'column', 'row']}
      justifyContent="space-between"
      alignItems={['center', 'flex-start']}
      mb={[8, 8, 16, 24, 24]}
    >
      <Box minWidth={[0, 0, 250]} mr={[4, 8, 8, 16, 32]}>
        <Text
          fontFamily="sans"
          display={['block']}
          fontSize={['3xl', '4xl', '4xl', '4xl', '4xl']}
          fontColor="cosmic.2"
          fontWeight="black"
          lineHeight="tight"
        >
          {title}
        </Text>
      </Box>
      <Text
        fontFamily="serif"
        display={['none', 'block']}
        fontSize={['base', 'base', 'lg']}
        fontColor="primary.9"
        fontWeight="medium"
        lineHeight="relaxed"
        maxWidth={860}
        mt={[4, 8, 8, 8, 0]}
      >
        {description}
      </Text>
    </Box>
  </>
)

export default HomeInfoRow
