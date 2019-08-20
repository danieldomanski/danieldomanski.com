/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]

const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`
const trans3 = (x, y) => `translate3d(${x / 6 - 150}px,${y / 6 - 200}px,0)`
const trans1 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`

const RECTANGLES_COLORS = ['#00FFF0', '#05DA34', '#F0F0F0', '#15BEFF']

const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min)

const isCollide = (a, b) =>
  !(
    a.y + a.height < b.y ||
    a.y > b.y + b.height ||
    a.x + a.width < b.x ||
    a.x > b.x + b.width
  )

const checkOverlap = (rectangles, currentRect) => {
  for (let i = 0; i < rectangles.length; i++) {
    if (isCollide(rectangles[i].props, currentRect)) {
      return true
    }
  }

  return false
}

const generateCircleDimensions = radius => {
  const x = getRandomInt(radius + 50, 1000 - radius)
  const y = getRandomInt(radius + 50, 300 - radius)

  return { x, y }
}

const generateCircles = (amount, radius) => {
  const circles = []

  for (let i = 0; i < amount; i++) {
    const newRectangle = generateRectangleDimensions(circles)
    const overlapped = checkOverlap(circles, newRectangle)

    if (overlapped) {
      i--
      continue
    }

    circles.push(
      <circle
        key={i}
        r={newRectangle.width}
        cx={newRectangle.x}
        cy={newRectangle.y}
        fill="#fff"
      />
    )
  }

  return circles
}

const OnMouseContainer = styled.div`
  ${tw`absolute w-full pin-t pin-x md:m-auto`}
  height: 100%;
`

const Container = styled.div`
  ${tw`absolute pin-y`}
  margin: auto;
  width: 100%;
  max-height: 700px;
`

const SvgParticle = styled.svg`
  ${tw`w-full max-w-2xl m-auto`}
  opacity: 0.4;
  height: 250px;
`

const BgParticles = () => (
    <OnMouseContainer>
      <Container>
        <SvgParticle viewBox="0 0 1000 300">
          {generateCircles(12, 6)}
        </SvgParticle>
        <SvgParticle viewBox="0 0 1000 300">
          {generateCircles(12, 6)}
        </SvgParticle>
        <SvgParticle viewBox="0 0 1000 300">
          {generateCircles(12, 6)}
        </SvgParticle>
      </Container>
    </OnMouseContainer>
  )

export default BgParticles
