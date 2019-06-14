import React from 'react'
import { useTrail, animated } from 'react-spring'
import styled from 'styled-components'

const config = { mass: 5, tension: 3000, friction: 500 }

const TitleText = styled.h1`
  display: flex;
  font-weight: ${props => (props.weight ? props.weight : 700)};
  font-size: 64px;
  height: auto;
  overflow: hidden;
  margin: 0;
  margin-bottom: 0.625em;
`

export default ({ children, active, weight }) => {
  const trailTitle = useTrail(1, {
    config,
    opacity: active ? 1 : 0,
    x: active ? 0 : 80,
    height: active ? 120 : 0,
    delay: active ? 500 : 100,
    from: { opacity: 0, x: 0, height: 0 },
  })
  return (
    <>
      {trailTitle.map(({ x, height, ...rest }, index) => (
        <TitleText weight={weight}>
          <animated.div
            key={1}
            style={{
              ...rest,
              transform: x.interpolate(x => `translate3d(0,${x}px,0)`),
            }}
          >
            <animated.span style={{ height }}>{children}</animated.span>
          </animated.div>
        </TitleText>
      ))}
    </>
  )
}
