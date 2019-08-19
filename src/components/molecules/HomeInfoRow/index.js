import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import Box from '../../atoms/Box'
import Text from '../../atoms/Text'
import Icon from '../../atoms/Icon'
import { LocalizedLink } from '../../atoms/Link'
import { DirectionalFade } from '../AnimatedBox'

const Line = styled.span`
  display: block;
  width: 80px;
  height: 4px;
  background-color: #181818;
  margin-top: 1em;
`

const HomeInfoRow = ({ title, description, button, idx }) => (
  <>
    <Box as="header" display="flex" justifyContent="space-between" mb={[24]}>
      <Box minWidth={250} mr={8}>
        <Text
          fontFamily="sans"
          display={['none', 'none', 'block']}
          fontSize={['base', '4xl']}
          fontColor="primary.10"
          fontWeight="black"
        >
          {title}
        </Text>
        <Line />
      </Box>
      <LocalizedLink to="/about" display={['block', 'block', 'none']}>
        <Box display={['flex', 'flex', 'none']} alignItems="center">
          <Text
            fontFamily="sans"
            fontSize="sm"
            fontColor="accent.7"
            fontWeight="bold"
          >
            {button}
          </Text>
          <Icon icon="caret" width={7} fill="#2E73FF" ml={2} />
        </Box>
      </LocalizedLink>
      <Text
        display={['none', 'none', 'block']}
        fontSize={['base', 'xl']}
        fontColor="primary.10"
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
