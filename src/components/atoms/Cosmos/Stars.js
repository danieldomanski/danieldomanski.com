import styled, { keyframes } from 'styled-components'

// Stars
const random = max => Math.floor(Math.random() * (max + 1))

const starsAnimation = topY => keyframes`
0% { transform: translate3d(0, 0px, 0) }
100% {transform: translate3d(0, -${topY}px, 0)}
`

export const generateStars = (n, x, y) => {
  const values = []

  for (let i = 0; i < n; i += 1) {
    values.push(`${random(x)}px ${random(y)}px #FFF`)
  }

  return values.join(',')
}

export const Stars = (stars, time, width, opacity, topY) => styled.div`
  width: ${width}px;
  height: ${width}px;
  background: transparent;
  box-shadow: ${stars};
  animation: ${starsAnimation(topY)} ${time}s linear infinite;
  border-radius: 50%;
  opacity: ${opacity};

  &:after {
    content: ' ';
    position: absolute;
    top: ${topY}px;
    left: -0px;
    width: ${width}px;
    height: ${width}px;
    background: transparent;
    box-shadow: ${stars};
    border-radius: 50%;
  }
`
