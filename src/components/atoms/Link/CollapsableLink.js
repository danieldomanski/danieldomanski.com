import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import PropTypes from 'prop-types'

const LinkContainer = styled(Link)`
  ${tw`relative inline-block z-10 font-sans no-underline text-primary-600 font-bold`};

  &:after {
    content: '';
    ${tw`absolute block bg-primary-800 w-full pin-l`};
    transition: 0.25s ease-in-out;
    z-index: -1;
    height: 8px;
    bottom: 0px;
  }

  &:hover {
    ${tw`text-primary-100`}
    &:after {
      bottom: -2px;
      height: 2px;
    }
  }
`

const CollapsableLink = ({ children, size, to }) => (
  <LinkContainer to={to} size={size}>
    {children}
  </LinkContainer>
)

CollapsableLink.propTypes = {
  size: PropTypes.oneOf(['base', 'lg', 'xl', '2xl', '4xl', '5xl', '6xl']),
}

CollapsableLink.defaultProps = {
  size: 'base',
}

export default CollapsableLink
