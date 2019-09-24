import React from 'react'
import LocalizedLink from '../../atoms/LocalizedLink'
import Box from '../../atoms/Box'
import Text from '../../atoms/Text'
import Icon from '../../atoms/Icon'
import CosmicButton from '../../atoms/Button/CosmicButton'

const LocalizedButton = ({ path, button, isMobile }) => (
  <Box textAlign="right" mt={16}>
    <LocalizedLink to={path}>
      {isMobile ? (
        <>
          <Text
            fontWeight="bold"
            fontColor="primary.11"
            fontSize={['base', 'base', 'base']}
            style={{ textTransform: 'uppercase' }}
          >
            {button}
          </Text>
          <Icon icon="arrow" width={18} height={17} fill="#000" ml={1} />
        </>
      ) : (
        <CosmicButton
          display={['none', 'none', 'block']}
          fontColor="primary.11"
          fontSize={['xs', 'sm', 'sm']}
        >
          {button}
        </CosmicButton>
      )}
    </LocalizedLink>
  </Box>
)

export default LocalizedButton
