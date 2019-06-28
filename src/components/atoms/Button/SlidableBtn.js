import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Icon from '../Icon'

const SlidableSpan = styled.span`
  ${tw`inline-block relative self-end z-10 px-4 font-bold font-sans`}

  &:before {
    ${tw`absolute pin-y m-auto bg-white  rounded-full`}
    box-sizing: border-box;
    z-index: -1;
    content: '';
    left: -4px;
    width: 64px;
    height: 64px;
    display: inline-block;
    transition: 0.25s;
  }

  &:hover {
    &:before {
      width: 100%;
    }
  }
`

const SlidableBtn = ({ children }) => (
  <SlidableSpan>
    {children}
    <Icon icon="arrow" width="25px" />
  </SlidableSpan>
)

export default SlidableBtn
