/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'

const random = max => Math.floor(Math.random() * (max + 1))

const generateStars = n => {
  const values = []

  for (let i = 0; i < n; i++) {
    values.push(`${random(2000)}px ${random(2000)}px #FFF`)
  }

  return values.join(',')
}

const Container = styled.div`
  ${tw`absolute pin-t`}

  width: 100%;
  height: 100%;
`

const starsAnimation = keyframes`
0% { transform: translate3d(0, 0, 0); }
100% {transform: translate3d(550px, -2000px, 0)}
`

const starsAnimation1 = keyframes`
0% { transform: translate3d(0, 0, 0) }
100% {transform: translate3d(0, -2000px, 0)}
`

const smStars = generateStars(700)
const mdStars = generateStars(200)
const lgStars = generateStars(50)

const StarsComponent = (stars, time, animation, width, opacity) => styled.div`
  width: ${width}px;
  height: ${width}px;
  background: transparent;
  box-shadow: ${stars};
  animation: ${animation} ${time}s linear infinite;
  border-radius: 50%;
  opacity: ${opacity};

  &:after {
    content: ' ';
    position: absolute;
    top: 2000px;
    left: 0;
    width: ${width}px;
    height: ${width}px;
    background: transparent;
    box-shadow: ${stars};
    border-radius: 50%;
  }
`
const SmallStars = StarsComponent(smStars, 150, starsAnimation1, 1, 0.4)
const MediumStars = StarsComponent(mdStars, 80, starsAnimation1, 2, 0.6)
const BigStars = StarsComponent(lgStars, 50, starsAnimation1, 3, 0.8)

const BgParticles = () => (
  <Container>
    <SmallStars />
    <MediumStars />
    <BigStars />
  </Container>
)

export default BgParticles
