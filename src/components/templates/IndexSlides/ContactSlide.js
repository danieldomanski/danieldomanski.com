import React from 'react'
import styled from 'styled-components'
import { Title, Description } from '../../atoms/AnimatedText'

const TextHighlighted = styled.p``

const ContactSlide = ({ active }) => (
  <>
    <Title active={active}>Contact</Title>
    <Description>
      I’m glad you came that far!
      <br />
      If you want me to work for you - drop me a line!
    </Description>
    <TextHighlighted>av3ng3roo@gmail.com</TextHighlighted>
  </>
)

export default ContactSlide
