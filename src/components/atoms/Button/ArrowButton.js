import React from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'
import tw from 'tailwind.macro'
import { color, typography, space } from 'styled-system'
import Icon from '../Icon'

const ButtonContainer = styled.button`
  ${tw`relative font-sans font-black cursor-pointer p-0 px-4 py-4`};

  outline: 0;
  border: 0;
  background: 0;
  transition: 0.15s ease-in-out;
  text-transform: uppercase;

  &:hover {
    &::after {
      width: 100%;
    }
    & svg {
      margin-left: 8px;
    }
  }

  &::after {
    background-color: #eee;
    content: '';
    width: 100%;
    height: 50px;
    left: 0;
    top: 0;
    position: absolute;
    transition: width 0.3s;
    z-index: -1;

    @media screen and (min-width: 768px) {
      width: 0;
      height: 50px;
    }
  }

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
  color: 'primary.10',
  width: 32,
}

export default withTheme(Button)
