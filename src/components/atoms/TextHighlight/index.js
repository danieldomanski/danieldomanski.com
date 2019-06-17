import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from '../../../config/theme'

const fontSize = value => theme.textSizes[value]
const fontWeight = value => theme.fontWeights[value]

const underlineStyles = {
  base: { bottom: 2, height: 6 },
  lg: { bottom: 2, height: 8 },
  xl: {
    bottom: 2,
    height: 10,
  },
}

const underlineStyle = size => underlineStyles[size]

const TextContainer = styled.p`
  ${tw`relative inline-block no-underline text-primary-800 font-bold z-10 p-0 m-0`};
  font-weight: ${props => fontWeight(props.weight)};

  &:after {
    ${tw`absolute block bg-primary-300 w-full pin-l `};
    content: '';
    height: ${props => underlineStyle(props.size).height}px;
    bottom: ${props => underlineStyle(props.size).bottom}px;
    z-index: -1;
  }
`

const TextHighlight = ({ children, size, weight }) => (
  <TextContainer size={size} weight={weight}>
    {children}
  </TextContainer>
)

TextHighlight.propTypes = {
  size: PropTypes.oneOf(['base', 'lg', 'xl', '2xl']),
  weight: PropTypes.oneOf(['base', 'bold', 'black']),
  children: PropTypes.node.isRequired,
}

TextHighlight.defaultProps = {
  size: 'base',
  weight: 'medium',
}

export default TextHighlight
