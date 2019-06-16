import React from 'react'
import styled from 'styled-components'
import { Title, Description } from '../../atoms/AnimatedText'
import { CenteredAbsoluteWrapper } from '../../atoms/Wrapper'

const TitleSpan = styled.span`
  display: block;

  &:first-of-type {
    font-size: 96px;
  }
`

const DescSpan = styled.span`
  display: block;
`

const HighlightedText = styled.span`
  display: inline-block;
  position: relative;

  &:after {
    position: absolute;
    left: 0;
    bottom: 4px;
    content: '';
    width: 100%;
    display: inline-block;
    height: 10px;
    background-color: #dadada;
    z-index: -1;
  }
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
        <HighlightedText>Szczecin, Poland.</HighlightedText>
      </DescSpan>
      <DescSpan>
        My job is to help <HighlightedText>your business grow</HighlightedText>{' '}
        by providing modern digital products.
      </DescSpan>
    </Description>
  </>
)

export default HomeSlide
