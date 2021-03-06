import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { withTheme } from 'styled-components'
import Icon from '../../atoms/Icon'
import Text from '../../atoms/Text'
import Box from '../../atoms/Box'
import Navigation from '../Navigation'
import { ContentContext } from '../../../context/ContentContext'

const Footer = ({ theme, variant }) => {
  const [content] = useContext(ContentContext)
  const {
    backgroundColor,
    color,
    secondaryColor,
  } = theme.components.bottomFooter[variant]

  return (
    <Box
      width={1}
      py={12}
      bg={backgroundColor}
      display="flex"
      alignItems="flex-end"
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
        <Box my={4}>
          <a
            href="https://github.com/danieldomanski"
            aria-label="Github profile"
          >
            <Icon
              icon="github"
              width={22}
              height={22}
              mr={4}
              fill={color}
              hover={{ color: '#9199BF' }}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-doma%C5%84ski-201884123/"
            aria-label="Linkedin profile"
          >
            <Icon
              icon="linkedin"
              width={22}
              height={22}
              fill={color}
              hover={{ color: '#9199BF' }}
            />
          </a>
        </Box>
        <Box display="flex">
          <Text mr={2} fontColor={secondaryColor}>
            {content.footer.codeAvailability}
          </Text>
          <a
            href="https://github.com/danieldomanski/danieldomanski.com"
            aria-label="Projects source code"
          >
            <Text fontColor={color} fontWeight="bold" fontSize="base">
              Github
            </Text>
          </a>
        </Box>
      </Box>
    </Box>
  )
}

Footer.propTypes = {
  variant: PropTypes.oneOfType(['primary', 'secondary']),
}

Footer.defaultProps = {
  variant: 'secondary',
}

export default withTheme(Footer)
