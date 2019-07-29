import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import PropTypes from 'prop-types'

import { typography, color } from 'styled-system'

const LinkContainer = styled(Link)`
  ${tw`font-sans no-underline`};
  ${typography};
  ${color};
`

const RegularLink = ({
  children,
  size,
  fontWeight,
  color,
  activeStyle,
  to,
}) => (
  <LinkContainer
    fontSize={size}
    fontWeight={fontWeight}
    color={color}
    activeStyle={activeStyle}
    to={to}
  >
    {children}
  </LinkContainer>
)

RegularLink.propTypes = {
  size: PropTypes.oneOf(['base', 'lg', 'xl', '2xl', '4xl', '5xl', '6xl']),
  children: PropTypes.node.isRequired,
  weight: PropTypes.oneOf(['base', 'bold', 'black']),
  color: PropTypes.string,
}

RegularLink.defaultProps = {
  size: 'base',
  weight: 'base',
  color: 'primary.6',
}

export default RegularLink
