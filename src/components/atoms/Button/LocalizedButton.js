import React from 'react'
import { LocalizedLink } from '../../atoms/Link'
import Box from '../../atoms/Box'
import Text from '../../atoms/Text'
import ArrowButton from '../../atoms/Button/ArrowButton'

const LocalizedButton = ({ path, button, isMobile }) => (
  <Box textAlign={['right', 'left', 'right']} mt={16}>
    <LocalizedLink to={path} display={['block']}>
      {isMobile ? (
        <Text
          fontWeight="black"
          fontColor="accent.8"
          fontSize={['base', 'base', 'base']}
          style={{ textTransform: 'uppercase' }}
        >
          {button}
          <Text ml={1} fontSize="xl" fontColor="accent.8" fontWeight="black">
            ›
          </Text>
        </Text>
      ) : (
        <ArrowButton
          display={['none', 'none', 'block']}
          fontColor="cosmic.2"
          fontSize={['xs', 'sm', 'base']}
        >
          {button}
        </ArrowButton>
      )}
    </LocalizedLink>
  </Box>
)

export default LocalizedButton
