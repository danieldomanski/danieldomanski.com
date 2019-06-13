import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const LogoContainer = styled.div`
  ${tw`flex justify-center items-center relative w-10 h-10 text-primary-900 font-black text-2xl`} border: 1.5px solid #353535;

  &:after {
    ${tw`absolute block w-10 h-10 bg-primary-300`};
    content: '';
    left: 6px;
    top: 6px;
    z-index: -1;
  }
`

const Logo = () => <LogoContainer>dd</LogoContainer>

export default Logo
