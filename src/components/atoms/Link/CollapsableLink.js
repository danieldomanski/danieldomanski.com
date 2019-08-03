import React from 'react'
import { Link } from 'gatsby'
import styled, { withTheme } from 'styled-components'
import tw from 'tailwind.macro'
import PropTypes from 'prop-types'
import { typography, color, space } from 'styled-system'

const LinkContainer = styled(Link)`
  ${tw`relative inline-block z-10 font-sans no-underline`};

  ${typography};
  ${color};
  ${space};

  &:after {
    content: '';
    ${tw`w-full absolute pin-l`};
    transition: 0.5s ease-in-out;
    z-index: -1;
    height: ${props => props.height};
    bottom: ${props => props.config.bottom};
    background-color: ${props => props.config.borderColor};
  }

  &:hover {
    color: ${props => props.config.fontColor};
    background-color: ${props => props.config.backgroundColor};

    &:after {
      background-color: ${props => props.config.fontColor};
    }
  }
`

const CollapsableLink = React.memo(
  ({ children, theme, variant, fontSize, fontWeight, mx, my, to }) => {
    const { height, bottom, fontColor } = theme.components.collapsable[variant]

    return (
      <LinkContainer
        to={to}
        color={fontColor}
        fontSize={fontSize}
        fontWeight={fontWeight}
        mx={mx}
        my={my}
        config={theme.components.collapsable[variant]}
        height={height}
        bottom={bottom}
      >
        {children}
      </LinkContainer>
    )
  }
)

CollapsableLink.propTypes = {
  variant: PropTypes.oneOf(['primary', 'accent']),
  fontSize: PropTypes.oneOf(['base', 'lg', 'xl', '2xl']),
  fontWeight: PropTypes.oneOf(['normal', 'bold', 'black']),
  mx: PropTypes.number,
  my: PropTypes.number,
}

CollapsableLink.defaultProps = {
  variant: 'dark',
  fontSize: 'base',
  fontWeight: 'bold',
  mx: 0,
  my: 0,
}

export default withTheme(CollapsableLink)
