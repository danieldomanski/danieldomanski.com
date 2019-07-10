import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { getComponentTheme } from '../../helpers/styles'

const LogoContainer = styled.span`
  ${tw`flex justify-center items-center relative w-10 h-10 font-black text-xl mr-0 md:mr-4`};
  border: 1.5px solid ${props => props.borderColor};
  &:hover {
    &:after {
      left: 0;
      top: 0;
    }
  }

  &:after {
    ${tw`absolute block w-10 h-10`};
    background-color: ${props => props.backgroundColor};
    content: '';
    left: 6px;
    top: 6px;
    z-index: -1;
    transition: 0.5s ease-in-out;
  }

  & > a {
    ${tw`no-underline`}
    color: ${props => props.color};
  }
`

const Logo = ({ children, variant }) => {
  const theme = getComponentTheme('logo', variant)
  const { color, borderColor, backgroundColor } = theme

  return (
    <LogoContainer
      color={color}
      borderColor={borderColor}
      backgroundColor={backgroundColor}
    >
      {children}
    </LogoContainer>
  )
}

Logo.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary']),
}

Logo.defaultProps = {
  variant: 'primary',
}

export default Logo
