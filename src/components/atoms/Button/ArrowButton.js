import React from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'
import tw from 'tailwind.macro'
import { color, typography, space } from 'styled-system'
import Icon from '../Icon'

const ButtonContainer = styled.button`
  ${tw`relative font-sans font-bold px-4 cursor-pointer py-4`};

  outline: 0;
  border: 0;
  background: 0;
  transition: 0.15s ease-in-out;

  &:hover {
    &::after {
      width: 100%;
    }
    & svg {
      margin-left: 8px;
    }
  }

  &::after {
    background-color: #e0e0e0;
    content: '';
    height: 60px;
    top: -8px;
    left: 8px;
    position: absolute;
    transition: width 0.3s;
    width: 0;
    z-index: -1;
  }

  border: 2px solid rgba(0, 0, 0, 0.75);

  ${typography};
  ${color};
  ${space};
`

const Button = ({ children, width, fontSize, color }) => (
  <ButtonContainer color={color} fontSize={fontSize}>
    {children}
    <Icon icon="arrow" width={width} ml={2} fill={color} />
  </ButtonContainer>
)

Button.propTypes = {
  children: PropTypes.node.isRequired,
  fontSize: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.number,
}

Button.defaultProps = {
  fontSize: 'base',
  color: 'primary.8',
  width: 32,
}

export default withTheme(Button)
