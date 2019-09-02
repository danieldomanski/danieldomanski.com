import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { withTheme } from 'styled-components'
import Icon from '../../atoms/Icon'
import Text from '../../atoms/Text'
import Box from '../../atoms/Box'
import Navigation from '../Navigation'
import { ContentContext } from '../../../context/ContentContext'

const BottomBox = ({ theme, variant }) => {
  const [content] = useContext(ContentContext)
  const {
    backgroundColor,
    color,
    secondaryColor,
  } = theme.components.bottomFooter[variant]

  return (
    <Box
      width={1}
      display="flex"
      bg={backgroundColor}
      alignItems="center"
      py={[8, 12, 12]}
      zIndex={12}
      borderTop="1px solid rgba(0,0,0,0.05)"
    >
      <Box
        m="auto"
        display="flex"
        flexDirection={['column', 'column', 'column']}
        alignItems="center"
        justifyContent="center"
        maxWidth={1400}
      >
        <Navigation
          variant={variant}
          content={content.header.nav}
          placement="footer"
        />
        <Box mt={8} mb={6}>
          <Icon
            icon="github"
            width={22}
            mr={4}
            fill={color}
            hover={{ color: '#4583FF' }}
          />
          <Icon
            icon="linkedin"
            width={22}
            fill={color}
            hover={{ color: '#4583FF' }}
          />
        </Box>
        <Box display="flex">
          <Text fontWeight="medium" mr={2} fontColor={secondaryColor}>
            Code available on
          </Text>
          <Text fontColor={color} fontWeight="bold" fontSize="base">
            Github
          </Text>
        </Box>
      </Box>
    </Box>
  )
}

BottomBox.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary']),
}

BottomBox.defaultProps = {
  variant: 'secondary',
}

export default withTheme(BottomBox)
