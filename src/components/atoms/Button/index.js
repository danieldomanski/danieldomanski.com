import React from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'
import tw from 'tailwind.macro'
import { color, typography, space } from 'styled-system'
import { hexToRGB } from '../../../utils/hexToRGB'

const ButtonContainer = styled.button`
  ${tw`font-sans rounded-full font-bold uppercase`};

  ${typography};
  ${color};
  ${space};
  transition: 0.5s;
  border: 2px solid ${props => hexToRGB(props.color, 0.75)};

  &:focus {
    border: 2px solid rgba(0, 85, 255, 0.5);
    outline: 0;
  }
`

const Button = ({ children, variant, size, theme }) => {
  // eslint-disable-next-line no-shadow
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
