/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import Icon from '../../atoms/Icon'

const random = max => Math.floor(Math.random() * (max + 1))

const generateStars = n => {
  const values = []

  for (let i = 0; i < n; i++) {
    values.push(`${random(2000)}px ${random(2000)}px #FFF`)
  }

  return values.join(',')
}

const Container = styled.div`
  ${tw`hidden md:block absolute pin-t`}
  z-index: -1;
  width: 100%;
  height: 100%;
`

const starsAnimation = keyframes`
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

const meteorAnimation1 = keyframes`
0% { transform: translate3d(-20vw, -60vh, 0); opacity: 0 }
1% { transform: translate3d(-20vw, -60vh, 0); opacity: 1 }
21% { transform: translate3d(100vw, 100vh, 0);  opacity: 0}
100% { transform: translate3d(100vw, 100vh, 0);  opacity: 0 }
`

const meteorAnimation2 = keyframes`
0% { transform: translate3d(40vw, -40vh, 0); opacity: 0 }
1% { transform: translate3d(40vw, -40vh, 0); opacity: 1 }
21% { transform: translate3d(120vw, 100vh, 0); opacity: 0 }
100% { transform: translate3d(120vw, 100vh, 0); opacity: 0 }
`

const meteorAnimation3 = keyframes`
0% { transform: translate3d(-20vw, -20vh, 0);  opacity: 0 }
1% { transform: translate3d(-20vw, -20vh, 0);  opacity: 1 }
21% { transform: translate3d(80vw, 120vh, 0); opacity: 0 }
100% { transform: translate3d(80vw, 120vh, 0); opacity: 0 }
`

const meteorAnimation4 = keyframes`
0% { transform: translate3d(-20vw, 20vh, 0); opacity: 0 }
1% { transform: translate3d(-20vw, 20vh, 0); opacity: 1 }
21% { transform: translate3d(80vw, 140vh, 0); opacity: 0 }
100% { transform: translate3d(80vw, 140vh, 0); opacity: 0 }
`

const Meteors = styled.div`
  display: ${props => (props.visible ? 'block' : 'none')};
  position: absolute;
  width: 100%;
  height: 100%;

  & svg:first-child {
    animation: ${meteorAnimation1} 12s linear 2s infinite backwards;
  }

  & svg:nth-child(2) {
    animation: ${meteorAnimation2} 15s linear 4s infinite backwards;
  }

  & svg:nth-child(3) {
    animation: ${meteorAnimation3} 12s linear 6s infinite backwards;
  }

  & svg:nth-child(4) {
    animation: ${meteorAnimation4} 10s linear 7s infinite backwards;
  }

  & svg:nth-child(5) {
    animation: ${meteorAnimation3} 12s linear 8s infinite backwards;
  }

  & svg:last-child {
    animation: ${meteorAnimation4} 14s linear 3s infinite backwards;
  }
`

const SmallStars = StarsComponent(smStars, 150, starsAnimation, 1, 0.5)
const MediumStars = StarsComponent(mdStars, 80, starsAnimation, 2, 0.6)
const BigStars = StarsComponent(lgStars, 50, starsAnimation, 3, 1)

const BgParticles = ({ variant }) => {
  console.log({ variant })
  return (
    <Container>
      <SmallStars />
      <MediumStars />
      <BigStars />
      <Meteors visible={variant === 'hero'}>
        <Icon icon="comet" width={32} />
        <Icon icon="comet" width={48} />
        <Icon icon="comet" width={64} />
        <Icon icon="comet" width={80} />
        <Icon icon="comet" width={64} />
        <Icon icon="comet" width={80} />
      </Meteors>
    </Container>
  )
}
BgParticles.propTypes = {
  variant: PropTypes.string,
}

BgParticles.defaultProps = {
  variant: 'hero',
}

export default BgParticles
