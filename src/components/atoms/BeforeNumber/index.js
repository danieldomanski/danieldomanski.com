import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const BeforeSpan = styled.span`
  ${tw`inline-block relative mx-2 text-4xl mb-84`}

  &:before {
    ${tw`absolute pin-l pin-t m-auto rounded-full text-6xl font-bold  `}
    z-index: -1;
    content: '${props => props.children}';
    left: -32px;
    top: -32px;
    display: inline-block;
    transition: 0.25s;
    opacity: 0.05;
  }

  &:hover {
    &:before {
      width: 100%;
    }
  }
`

const BeforeNumber = ({ children }) => (
  <BeforeSpan number={children}>{children}</BeforeSpan>
)

export default BeforeNumber
