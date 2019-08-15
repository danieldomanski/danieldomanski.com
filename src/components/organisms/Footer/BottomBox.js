import React from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'
import Icon from '../../atoms/Icon'
import Text from '../../atoms/Text'
import { Link } from '../../atoms/Link'
import Box from '../../atoms/Box'

const BottomBox = ({ theme, variant }) => {
  const { backgroundColor, color } = theme.components.bottomFooter[variant]

  return (
    <Box
      width={1}
      bg={backgroundColor}
      py={8}
      borderTop="1px solid rgba(0,0,0,0.1)"
    >
      <Box
        maxWidth={1400}
        m="auto"
        display="flex"
        flexDirection={['column', 'column', 'row']}
        alignItems="center"
        justifyContent="space-between"
        px={[0, 12]}
      >
        <Link to="http://github.com/av3ng3roo">
          <Text
            display={['none', 'none', 'block']}
            fontColor={color}
            fontWeight="bold"
            fontSize={['lg']}
            hover={{ color: '#4583FF' }}
          >{`</> code`}</Text>
        </Link>
        <Text
          fontSize={['lg']}
          fontColor={color}
          fontWeight="bold"
          mb={[4, 4, 0]}
        >
          hello@ddomanski.dev
        </Text>
        <Box>
          <Icon
            icon="github"
            width={[18, 24]}
            mr={3}
            fill={color}
            hover={{ color: '#4583FF' }}
          />
          <Icon
            icon="linkedin"
            width={[18, 24]}
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
