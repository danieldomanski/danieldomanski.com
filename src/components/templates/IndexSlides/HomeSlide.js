import React from 'react'
import styled from 'styled-components'
import { Title, Description } from '../../atoms/AnimatedText'
import TextHighlight from '../../atoms/TextHighlight'

const TitleSpan = styled.span`
  display: block;

  &:first-of-type {
    font-size: 96px;
  }
`

const DescSpan = styled.span`
  display: block;
`

const HomeSlide = ({ active }) => (
  <>
    <Title active={active} weight={400}>
      <TitleSpan>Hi,</TitleSpan>
      <TitleSpan>I’m Daniel Domański.</TitleSpan>
    </Title>
    <Description active={active}>
      <DescSpan>
        I’m a web developer currently based in{' '}
        <TextHighlight bottom="lg" height="xl">
          Szczecin, Poland.
        </TextHighlight>
      </DescSpan>
      <DescSpan>
        My job is to help{' '}
        <TextHighlight bottom="lg" height="xl">
          your business grow
        </TextHighlight>{' '}
        by providing modern digital products.
      </DescSpan>
    </Description>
  </>
)

export default HomeSlide
