import React from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'
import Icon from '../../atoms/Icon'
import Text from '../../atoms/Text'
import { Link } from '../../atoms/Link'
import Box from '../../atoms/Box'

const BottomBox = ({ theme, variant }) => {
  const {
    backgroundColor,
    color,
    secondaryColor,
  } = theme.components.bottomFooter[variant]

  return (
    <Box
      width={1}
      bg={backgroundColor}
      py={8}
      borderTop={variant === 'secondary' ? '1px solid rgba(0,0,0,0.1)' : 'none'}
      zIndex={12}
    >
      <Box
        m="auto"
        display="flex"
        flexDirection={['column', 'column', 'row']}
        alignItems="center"
        justifyContent="space-between"
        px={[8, 8, 8, 24]}
      >
        <Link to="http://github.com/av3ng3roo">
          <Text
            fontFamily="sans"
            display={['none', 'none', 'block']}
            fontColor={secondaryColor}
            fontSize={['base']}
            hover={{ color: '#4583FF' }}
          >
            Source code here.
          </Text>
          <Text
            fontFamily="sans"
            display={['none', 'none', 'block']}
            fontColor={color}
            fontWeight="black"
            fontSize={['xl']}
            hover={{ color: '#4583FF' }}
          >
            Daniel.
          </Text>
        </Link>
        <Text
          fontFamily="sans"
          fontSize={['base', 'base', 'xl']}
          fontColor={color}
          fontWeight="bold"
          mb={[3, 3, 0]}
        >
          hello@ddomanski.dev
        </Text>
        <Box>
          <Icon
            icon="github"
            width={[18, 21]}
            mr={2}
            fill={color}
            hover={{ color: '#4583FF' }}
          />
          <Icon
            icon="linkedin"
            width={[18, 21]}
            fill={color}
            hover={{ color: '#4583FF' }}
          />
        </Box>
      </Box>
    </Box>
  )
}

BottomBox.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary']),
}

BottomBox.defaultProps = {
  variant: 'primary',
}

export default withTheme(BottomBox)
