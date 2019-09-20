import React from 'react'
import LocalizedLink from '../../atoms/LocalizedLink'
import Box from '../../atoms/Box'
import Text from '../../atoms/Text'
import CosmicButton from '../../atoms/Button/CosmicButton'

const LocalizedButton = ({ path, button, isMobile }) => (
  <Box textAlign={['left', 'left', 'right']} mt={[8, 12, 16]}>
    <LocalizedLink to={path}>
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
