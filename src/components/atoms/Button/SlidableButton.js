import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Icon from '../Icon'
import Text from '../Text'

const SlidableSpan = styled.button`
  ${tw`flex items-center relative z-10 px-6 bg-transparent no-underline`}
  border: 0;
  outline: 0;

  &:before {
    ${tw`absolute pin-y m-auto bg-white rounded-full shadow`}
    box-sizing: border-box;
    z-index: -1;
    content: '';
    left: -2px;
    width: 64px;
    height: 64px;
    display: inline-block;
    transition: 0.5s ease-in-out;
  }

  &:focus {
    &:before {
      box-shadow: 0px 0px 0px 3px rgba(0, 85, 255, 0.5);
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
    <Text
      fontFamily="sans"
      fontSize="base"
      fontColor="primary.7"
      fontWeight="bold"
      mr={2}
    >
      {children}
    </Text>
    <Icon icon="arrow" fill="#353535" width="25px" />
  </SlidableSpan>
)

export default SlidableBtn
