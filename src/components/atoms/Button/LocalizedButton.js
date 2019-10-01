import React from 'react'
import LocalizedLink from '../LocalizedLink'
import Box from '../Box'
import Text from '../Text'
import Icon from '../Icon'
import CosmicButton from './CosmicButton'

const LocalizedButton = ({ path, button, isMobile }) => (
  <Box textAlign="right" mt={8}>
    <LocalizedLink to={path}>
      {isMobile ? (
        <>
          <Text
            fontWeight="bold"
            fontColor="primary.11"
            fontSize={['sm', 'base', 'base']}
            style={{ textTransform: 'uppercase' }}
          >
            {button}
          </Text>
          <Icon icon="arrow" width={17} height={17} fill="#000" ml={1} />
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
