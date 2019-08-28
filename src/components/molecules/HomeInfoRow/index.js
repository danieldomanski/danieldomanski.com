import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import Box from '../../atoms/Box'
import Text from '../../atoms/Text'
import Icon from '../../atoms/Icon'
import { LocalizedLink } from '../../atoms/Link'
import { DirectionalFade } from '../AnimatedBox'

const Line = styled.span`
  ${tw`mt-1 md:mt-2`}
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
      flexDirection={['column', 'column', 'row']}
      justifyContent="space-between"
      alignItems={['flex-start']}
      mb={[8, 8, 16, 20, 20]}
    >
      <Box minWidth={[0, 0, 250]} mr={[4, 8, 8, 16, 32]}>
        <Text
          fontFamily="sans"
          display={['block']}
          fontSize={['3xl', '4xl', '4xl']}
          fontColor="cosmic.2"
          fontWeight="black"
        >
          {title}
        </Text>
        <Line />
      </Box>
      <Text
        fontFamily="sans"
        display={['block']}
        fontSize={['base', 'base', 'xl', 'xl', 'xl']}
        fontColor="cosmic.2"
        fontWeight="medium"
        lineHeight="relaxed"
        maxWidth={920}
        mt={[8, 8, 0]}
      >
        {description}
      </Text>
    </Box>
  </>
)

export default HomeInfoRow
