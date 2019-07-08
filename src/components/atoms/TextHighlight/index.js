import React from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'
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

const TextContainer = styled.p`
  ${tw`inline self-start no-underline text-primary-800 font-bold p-0 m-0`};

  font-weight: ${props => fontWeight(props.weight)};
  font-size: ${props => fontSize(props.size)};
  color: ${props => color(props.fontColor)};

  background-image: linear-gradient(${props => `${props.from}, ${props.to}`}),
    linear-gradient(${props => `${props.from}, ${props.to}`});
  background-repeat: no-repeat;
  background-size: 0% 30%, 100% 30%;
  background-position: bottom 10% left, bottom 10% left;

  &:hover {
    background-size: 100% 30%, 100% 30%;
  }

  transition: background-size 0.25s;
`

const TextHighlight = ({
  children,
  color,
  fontSize,
  fontWeight,
  variant,
  theme,
}) => {
  const { from, to } = theme.components.highlights[variant]

  return (
    <TextContainer
      color={color}
      fontWeight={fontWeight}
      fontSize={fontSize}
      from={from}
      to={to}
    >
      {children}
    </TextContainer>
  )
}

TextHighlight.propTypes = {
  color: PropTypes.oneOf(primaryColors),
  fontSize: PropTypes.oneOf(['base', 'lg', 'xl', '2xl']),
  fontWeight: PropTypes.oneOf(['base', 'bold', 'black']),
  variant: PropTypes.oneOf(['dark', 'light']),
  children: PropTypes.node.isRequired,
}

TextHighlight.defaultProps = {
  color: 'primary-500',
  variant: 'dark',
  fontSize: 'base',
  fontWeight: 'medium',
}

export default withTheme(TextHighlight)
