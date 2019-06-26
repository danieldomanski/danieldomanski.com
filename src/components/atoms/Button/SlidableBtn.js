import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Icon from '../Icon'

const SlidableSpan = styled.span`
  ${tw`inline-block relative text-sm self-end px-4`}

  &:before {
    ${tw`absolute pin-y m-auto bg-white py-3 px-1 rounded-full`}
    z-index: -1;
    content: '';
    width: 20%;
    height: 100%;
    left: -4px;
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
