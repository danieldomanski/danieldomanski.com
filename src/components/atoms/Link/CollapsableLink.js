import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import PropTypes from 'prop-types'
import { color } from '../../helpers/styles'

const sizes = {
  base: { height: '6px', bottom: '2px' },
  lg: { height: '8px', bottom: '4px' },
  xl: { height: '10px', bottom: '6px' },
  '2xl': { height: '12px', bottom: '8px' },
}

const LinkContainer = styled(Link)`
  ${tw`relative inline-block z-10 font-sans no-underline font-bold`};
  color: ${props => color(props.fontColor)};

  &:after {
    content: '';
    ${tw`absolute w-full pin-l`};
    transition: 0.3s ease-in-out;
    z-index: -1;
    height: ${props => sizes[props.size].height};
    bottom: ${props => sizes[props.size].bottom};
    background-color: ${props => color(props.underlineColor)};
  }

  &:hover {
    color: ${props => color(props.hoverColor)};

    &:after {
      ${tw`bg-primary-700`}
      bottom: -2px;
      height: 2px;
    }
  }
`

const CollapsableLink = ({
  children,
  size,
  underlineColor,
  fontColor,
  hoverColor,
  to,
}) => (
  <LinkContainer
    to={to}
    underlineColor={underlineColor}
    fontColor={fontColor}
    size={size}
    hoverColor={hoverColor}
  >
    {children}
  </LinkContainer>
)
const primaryColors = [
  'primary-100',
  'primary-200',
  'primary-300',
  'primary-400',
  'primary-500',
  'primary-600',
  'primary-700',
  'primary-800',
  'primary-900',
]

CollapsableLink.propTypes = {
  size: PropTypes.oneOf(['base', 'lg', 'xl', '2xl']),
  underlineColor: PropTypes.oneOf(primaryColors),
  fontColor: PropTypes.oneOf(primaryColors),
  hoverColor: PropTypes.oneOf(primaryColors),
}

CollapsableLink.defaultProps = {
  size: 'base',
  underlineColor: 'primary-800',
  fontColor: 'primary-300',
  hoverColor: 'primary-100',
}

export default CollapsableLink
