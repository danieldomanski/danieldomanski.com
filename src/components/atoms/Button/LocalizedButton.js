import React from 'react'
import { LocalizedLink } from '../../atoms/Link'
import Box from '../../atoms/Box'
import Text from '../../atoms/Text'
import CosmicButton from '../../atoms/Button/CosmicButton'

const LocalizedButton = ({ path, button, isMobile }) => (
  <Box textAlign={['right', 'left', 'right']} mt={16}>
    <LocalizedLink to={path} display={['block']}>
      {isMobile ? (
        <>
          <Text
            fontWeight="black"
            fontColor="accent.8"
            fontSize={['base', 'base', 'base']}
            style={{ textTransform: 'uppercase' }}
          >
            {button}
          </Text>
          <Text ml={1} fontSize="xl" fontColor="accent.8" fontWeight="black">
            ›
          </Text>
        </>
      ) : (
        <CosmicButton
          display={['none', 'none', 'block']}
          fontColor="cosmic.2"
          fontSize={['xs', 'sm', 'base']}
        >
          {button}
        </CosmicButton>
      )}
    </LocalizedLink>
  </Box>
)

export default LocalizedButton
