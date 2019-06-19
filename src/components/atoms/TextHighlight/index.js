import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { fontSize, fontWeight } from '../../helpers/styles'

const underlineStyles = {
  base: { bottom: 0, height: 6 },
  lg: { bottom: 2, height: 8 },
  xl: {
    bottom: 4,
    height: 10,
  },
  '2xl': {
    bottom: 8,
    height: 12,
  },
}

const underlineStyle = size => underlineStyles[size]

const TextContainer = styled.p`
  ${tw`relative inline-block no-underline text-primary-800 font-bold z-10 p-0 m-0 px-1`};
  font-weight: ${props => fontWeight(props.weight)};
  font-size: ${props => fontSize(props.size)};

  &:after {
    ${tw`absolute block bg-primary-200 w-full pin-l `};
    content: '';
    height: ${props => underlineStyle(props.underline.height).height}px;
    bottom: ${props => underlineStyle(props.underline.bottom).bottom}px;
    z-index: -1;
  }
`

const TextHighlight = ({ children, size, weight, bottom, height }) => (
  <TextContainer size={size} weight={weight} underline={{ bottom, height }}>
    {children}
  </TextContainer>
)

TextHighlight.propTypes = {
  size: PropTypes.oneOf(['base', 'lg', 'xl', '2xl']),
  bottom: PropTypes.oneOf(['base', 'lg', 'xl', '2xl']),
  height: PropTypes.oneOf(['base', 'lg', 'xl', '2xl']),
  weight: PropTypes.oneOf(['base', 'bold', 'black']),
  children: PropTypes.node.isRequired,
}

TextHighlight.defaultProps = {
  size: 'base',
  weight: 'medium',
  bottom: 'base',
  height: 'base',
}

export default TextHighlight
