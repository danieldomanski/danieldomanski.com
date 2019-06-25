import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const SlidableSpan = styled.span`
  ${tw`inline-block relative mx-4`}

  &:before {
    ${tw`absolute pin-y m-auto bg-white py-4 px-3 rounded-full`}
    z-index: -1;
    content: '';
    width: 25%;
    height: 100%;
    left: -12px;
    display: inline-block;
  }
`

const SlidableBtn = ({ children }) => <SlidableSpan>{children}</SlidableSpan>

export default SlidableBtn
