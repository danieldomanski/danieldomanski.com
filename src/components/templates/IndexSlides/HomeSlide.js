import React from 'react'
import styled from 'styled-components'
import { Title, Description } from '../../atoms/AnimatedText'
import { CenteredAbsoluteWrapper } from '../../atoms/Wrapper'

const Container = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0vw;
  top: 0vh;
`

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin: auto;
`

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

const HomeSlide = ({ active, hide }) => (
  <Container>
    <Wrapper>
      <CenteredAbsoluteWrapper active={active} hide={hide}>
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
            My job is to help{' '}
            <HighlightedText>your business grow</HighlightedText> by providing
            modern digital products.
          </DescSpan>
        </Description>
      </CenteredAbsoluteWrapper>
    </Wrapper>
  </Container>
)

export default HomeSlide
