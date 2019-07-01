import React, { useContext } from 'react'
import styled from 'styled-components'
import Header from '../../organisms/Header'
import { Title, Description } from '../../atoms/AnimatedText'
import TextHighlight from '../../atoms/TextHighlight'
import useWindowSize from '../../../hooks/useWindowSize'
import { ScrollContext } from '../../../context/ScrollContext'
import Paragraph from '../../atoms/Paragraph'

const TitleSpan = styled.span`
  display: block;

  &:first-of-type {
    font-size: 96px;
  }
`

const HeroHeading = styled.section`
  ${tw`absolute w-full h-screen`}
  z-index: 4;
  background-color: #e0e0e0;
  opacity: ${props => props.opacity};
`

const DescSpan = styled.span`
  display: block;
  white-space: nowrap;
`

const HeroText = styled.section`
  ${tw`fixed flex flex-col items-center justify-center text-center`};
  z-index: 4;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: ${props => (props.visible ? 'block' : 'none')};

  transition: 0.25s;
`

const HomeSlide = () => {
  const windowSize = useWindowSize()
  const [scroll] = useContext(ScrollContext)
  const opacity = Math.max(1 - scroll.y / 1000, 0.4)

  return (
    <HeroHeading opacity={opacity}>
      <Header />
      <HeroText visible={scroll.y <= windowSize.height}>
        <Title inViewport size="6xl" weight={400}>
          <TitleSpan>Hi,</TitleSpan>
          <TitleSpan>I’m Daniel Domański.</TitleSpan>
        </Title>
        <Paragraph inViewport fontColor="primary-900" size="xl">
          <DescSpan>
            I’m a web developer currently based in
            <TextHighlight
              bottom="lg"
              height="xl"
              fontColor="primary-900"
              size="xl"
              underlineColor="primary-400"
            >
              Szczecin, Poland.
            </TextHighlight>
          </DescSpan>
          <DescSpan>
            My job is to help
            <TextHighlight
              bottom="lg"
              height="xl"
              fontColor="primary-900"
              size="xl"
              underlineColor="primary-400"
            >
              your business grow
            </TextHighlight>
            by providing modern digital products.
          </DescSpan>
        </Paragraph>
      </HeroText>
    </HeroHeading>
  )
}

export default HomeSlide
