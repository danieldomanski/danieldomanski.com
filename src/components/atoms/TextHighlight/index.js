import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { fontSize, fontWeight, color } from '../../helpers/styles'

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
  ${tw`relative inline-block no-underline text-primary-800 font-bold z-10 p-0 m-0 px-1 whitespace-no-wrap`};

  font-weight: ${props => fontWeight(props.weight)};
  font-size: ${props => fontSize(props.size)};
  color: ${props => color(props.fontColor)};

  &:after {
    ${tw`absolute block bg-primary-200 w-full pin-l`};
    z-index: -1;
    content: '';
    height: ${props => underlineStyle(props.underline.height).height}px;
    bottom: ${props => underlineStyle(props.underline.bottom).bottom}px;
    background-color: ${props => color(props.underlineColor)};
  }
`

const TextHighlight = ({
  children,
  size,
  underlineColor,
  fontColor,
  weight,
  bottom,
  height,
}) => (
  <TextContainer
    underlineColor={underlineColor}
    size={size}
    weight={weight}
    underline={{ bottom, height }}
    fontColor={fontColor}
  >
    {children}
  </TextContainer>
)

TextHighlight.propTypes = {
  size: PropTypes.oneOf(['base', 'lg', 'xl', '2xl']),
  underlineColor: PropTypes.oneOf(primaryColors),
  fontColor: PropTypes.oneOf(primaryColors),
  bottom: PropTypes.oneOf(['base', 'lg', 'xl', '2xl']),
  height: PropTypes.oneOf(['base', 'lg', 'xl', '2xl']),
  weight: PropTypes.oneOf(['base', 'bold', 'black']),
  children: PropTypes.node.isRequired,
}

TextHighlight.defaultProps = {
  size: 'base',
  fontColor: 'primary-100',
  underlineColor: 'primary-700',
  weight: 'medium',
  bottom: 'base',
  height: 'base',
}

export default TextHighlight
