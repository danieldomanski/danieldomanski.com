import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import Box from '../../atoms/Box'
import Text from '../../atoms/Text'
import Icon from '../../atoms/Icon'
import { LocalizedLink } from '../../atoms/Link'
import { DirectionalFade } from '../AnimatedBox'

const Line = styled.span`
  ${tw`mt-2 md:mt-4`}
  display: block;
  width: 80px;
  height: 4px;
  background-color: #181818;
`

const HomeInfoRow = ({ title, description, button, idx }) => (
  <>
    <Box
      as="header"
      display="flex"
      justifyContent="space-between"
      alignItems={['center', 'center', 'flex-start']}
      mb={[8, 8, 12, 20]}
    >
      <Box minWidth={[0, 0, 250]} mr={[4, 8, 16, 32]}>
        <Text
          fontFamily="sans"
          display={['block']}
          fontSize={['2xl', '3xl', '4xl']}
          fontColor="cosmic.0"
          fontWeight="black"
        >
          {title}
        </Text>
        <Line />
      </Box>
      <Text
        display={['none', 'none', 'block']}
        fontSize={['base', 'base', 'lg', 'xl']}
        fontColor="cosmic.2"
        fontWeight="medium"
        lineHeight="relaxed"
        maxWidth={920}
      >
        {description}
      </Text>
    </Box>
  </>
)

export default HomeInfoRow
