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
    ${tw`absolute w-full pin-l`};
    transition: 0.5s ease-in-out;
    z-index: -1;
    height: ${props => props.height};
    bottom: ${props => props.bottom};
    background-color: ${props => props.bg};
  }

  &:hover {
    color: ${props => props.hoverColor};

    &:after {
      ${tw`bg-primary-700`}
      bottom: -1px;
      height: 2px;
    }
  }
`

const CollapsableLink = React.memo(
  ({ children, theme, variant, fontSize, fontWeight, mx, my, to }) => {
    const {
      height,
      bottom,
      color,
      backgroundColor,
      hoverColor,
    } = theme.components.collapsable[variant]

    return (
      <LinkContainer
        to={to}
        color={color}
        fontSize={fontSize}
        fontWeight={fontWeight}
        mx={mx}
        my={my}
        bgColor={backgroundColor}
        hoverColor={hoverColor}
        height={height}
        bottom={bottom}
      >
        {children}
      </LinkContainer>
    )
  }
)

CollapsableLink.propTypes = {
  variant: PropTypes.oneOf(['dark', 'light']),
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
