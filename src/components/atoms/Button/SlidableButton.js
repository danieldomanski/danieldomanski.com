import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Icon from '../Icon'

const SlidableSpan = styled.button`
  ${tw`inline-block relative self-end z-10 px-4 text-sm  font-bold text-primary-800 font-sans bg-transparent`}
  border: 0;
  outline: 0;

  &:before {
    ${tw`absolute pin-y m-auto bg-white rounded-full shadow`}
    box-sizing: border-box;
    z-index: -1;
    content: '';
    left: -4px;
    width: 64px;
    height: 64px;
    display: inline-block;
    transition: 0.5s ease-in-out;
  }

  &:focus {
    &:before {
      box-shadow: 0px 0px 0px 3px rgba(0, 0, 0, 0.1);
    }
  }

  &:hover {
    &:before {
      ${tw`w-full`}
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
