import React, { useContext } from 'react'
import styled from 'styled-components'

import { Title, Description } from '../../atoms/AnimatedText'
import TextHighlight from '../../atoms/TextHighlight'
import useWindowSize from '../../../hooks/useWindowSize'
import { ScrollContext } from '../../../context/ScrollContext'

const TitleSpan = styled.span`
  display: block;

  &:first-of-type {
    font-size: 96px;
  }
`

const HeroHeading = styled.header`
  ${tw`absolute w-full h-screen `}
  z-index: 4;
  background-color: #e0e0e0;
`

const DescSpan = styled.span`
  display: block;
`

const HeroText = styled.section`
  ${tw`fixed flex flex-col items-center justify-center text-center`};
  z-index: 4;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: ${props => (props.visible ? 'block' : 'none')};
  opacity: ${props => props.opacity};
  transition: 0.25s;
`

const HomeSlide = ({ visible }) => {
  const windowSize = useWindowSize()
  const [scroll] = useContext(ScrollContext)
  const opacity = Math.max(1 - scroll.y / 600, 0.1)

  return (
    <HeroHeading>
      <HeroText visible={scroll.y <= windowSize.height} opacity={opacity}>
        <Title inViewport weight={400}>
          <TitleSpan>Hi,</TitleSpan>
          <TitleSpan>I’m Daniel Domański.</TitleSpan>
        </Title>
        <Description inViewport>
          <DescSpan>
            I’m a web developer currently based in
            <TextHighlight bottom="lg" height="xl">
              Szczecin, Poland.
            </TextHighlight>
          </DescSpan>
          <DescSpan>
            My job is to help
            <TextHighlight bottom="lg" height="xl">
              your business grow
            </TextHighlight>
            by providing modern digital products.
          </DescSpan>
        </Description>
      </HeroText>
    </HeroHeading>
  )
}

export default HomeSlide
