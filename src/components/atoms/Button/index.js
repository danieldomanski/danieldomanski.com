import React from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'
import tw from 'tailwind.macro'
import { color, typography, space } from 'styled-system'

const ButtonContainer = styled.button`
  ${tw`font-serif rounded-full shadow font-bold`};

  ${typography};
  ${color};
  ${space};
  border: 0;
  transition: 0.5s;
  border: 2px solid rgba(0, 0, 0, 0);

  &:hover {
    ${tw`shadow-lg`}
  }

  &:focus {
    border: 2px solid rgba(0, 85, 255 0.5);
    outline: 0;
  }
`

const Button = ({ children, variant, size, theme }) => {
  const { backgroundColor, color } = theme.buttons.colors[variant]
  const { px, py, fontSize } = theme.buttons.sizes[size]

  return (
    <ButtonContainer
      bg={backgroundColor}
      color={color}
      px={px}
      py={py}
      fontSize={fontSize}
    >
      {children}
    </ButtonContainer>
  )
}

Button.propTypes = {
  size: PropTypes.oneOf(['sm', 'base', 'lg', 'xl']),
  variant: PropTypes.oneOf(['primary', 'secondary']),
  children: PropTypes.node.isRequired,
}

Button.defaultProps = {
  variant: 'primary',
  size: 'base',
}

export default withTheme(Button)
