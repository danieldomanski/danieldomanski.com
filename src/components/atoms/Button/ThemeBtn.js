import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { fontSize, color, spacing } from '../../helpers/styles'

const sizes = {
  sm: { px: 4, py: 2, fontSize: 'base' },
  lg: { px: 8, py: 4, fontSize: 'lg' },
  xl: { px: 12, py: 8, fontSize: 'xl' },
}

const types = {
  primary: { bgColor: 'primary-100', fontColor: 'primary-900' },
  secondary: { bgColor: 'primary-900', fontColor: 'primary-100' },
}

const Button = styled.button`
  ${tw`font-serif rounded-full shadow font-bold`};

  border: 0;
  padding: ${props => spacing(sizes[props.size].px, sizes[props.size].py)};
  font-size: ${props => fontSize(sizes[props.size].fontSize)};
  background-color: ${props => color(types[props.type].bgColor)};
  color: ${props => color(types[props.type].fontColor)};
`

const ThemeBtn = ({ children, size, type }) => (
  <Button size={size} type={type}>
    {children}
  </Button>
)

ThemeBtn.propTypes = {
  size: PropTypes.oneOf(['sm', 'lg', 'xl']),
  type: PropTypes.oneOf(['primary', 'secondary']),
  children: PropTypes.node.isRequired,
}

ThemeBtn.defaultProps = {
  size: 'lg',
  type: 'primary',
}

export default ThemeBtn
