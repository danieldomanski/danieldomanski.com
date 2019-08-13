import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { useInView } from 'react-intersection-observer'
import { useSpring, animated } from 'react-spring'
import Box from '../../atoms/Box'
import Text from '../../atoms/Text'
import Icon from '../../atoms/Icon'
import { LocalizedLink } from '../../atoms/Link'
import { FadeUp, DirectionalFade } from '../../atoms/AnimatedText'

const Line = styled.span`
  display: block;
  width: 60px;
  height: 4px;
  background-color: #181818;
  margin-top: 1rem;
`

const HomeInfoRow = ({ title, description, button, idx }) => (
  <>
    <Box display="flex" justifyContent="space-between" mb={[24]}>
      <FadeUp delay={0.1}>
        <Text
          display={['none', 'none', 'block']}
          fontFamily="sans"
          fontSize={['base', '4xl']}
          fontColor="primary.10"
          fontWeight="bold"
          minWidth={100}
        >
          {title}
        </Text>
        <Line />
      </FadeUp>
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
      <Box>
        <DirectionalFade direction="right" px={80} delay={0.5}>
          <Text
            display={['none', 'none', 'block']}
            fontFamily="sans"
            fontSize={['base', 'xl']}
            fontColor="primary.8"
            fontWeight="medium"
            lineHeight="loose"
            maxWidth={800}
          >
            {description}
          </Text>
        </DirectionalFade>
      </Box>
    </Box>
  </>
)

export default HomeInfoRow
