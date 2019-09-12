import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import PropTypes from 'prop-types'

import { layout, typography, space, color } from 'styled-system'

const LinkContainer = styled(Link)`
  ${tw`font-sans no-underline cursor-pointer`};
  ${space}
  ${layout}
  ${typography};
  ${color};
`

const RegularLink = ({
  children,
  fontSize,
  display,
  fontWeight,
  fontColor,
  width,
  maxWidth,
  my,
  partiallyActive,
  activeStyle,
  to,
}) => (
  <LinkContainer
    display={display}
    fontSize={fontSize}
    fontWeight={fontWeight}
    color={fontColor}
    width={width}
    maxWidth={maxWidth}
    my={my}
    activeStyle={activeStyle}
    partiallyActive={partiallyActive}
    to={to}
  >
    {children}
  </LinkContainer>
)

RegularLink.propTypes = {
  fontSize: PropTypes.oneOf(['base', 'lg', 'xl', '2xl', '4xl', '5xl', '6xl']),
  children: PropTypes.node.isRequired,
  fontWeight: PropTypes.oneOf(['base', 'bold', 'black']),
  fontColor: PropTypes.string,
}

RegularLink.defaultProps = {
  fontSize: 'base',
  fontWeight: 'base',
  fontColor: 'primary.6',
}

export default RegularLink
