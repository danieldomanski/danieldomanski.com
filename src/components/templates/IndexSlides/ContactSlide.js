import React from 'react'
import styled from 'styled-components'
import { Title, Description } from '../../atoms/AnimatedText'

const TextHighlighted = styled.p`
  ${tw`relative inline-block text-2xl`};
  &:after {
    ${tw`w-full absolute pin-l inline-block bg-primary-200`};
    bottom: 2px;
    content: '';
    height: 12px;
    z-index: -1;
  }
`

const ContactSlide = ({ active }) => (
  <>
    <Title active={active}>Contact</Title>
    <Description active={active}>
      I’m glad you came that far!
      <br />
      <b>If you want me to work for you - drop me a line!</b>
    </Description>
    <TextHighlighted>av3ng3roo@gmail.com</TextHighlighted>
    <Description active={active}>
      Perhaps you find it easier to contact via Github or LinkedIn - you can
      find them in the footer.
    </Description>
  </>
)

export default ContactSlide
