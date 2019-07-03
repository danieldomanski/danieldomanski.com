import React from 'react'
import { useTrail, animated } from 'react-spring'
import styled from 'styled-components'
import { fontSize } from '../../helpers/styles'

const config = { mass: 5, tension: 3000, friction: 500 }

const TitleText = styled.h1`
  ${tw`flex m-0 mb-4 z-10 h-auto overflow-hidden`}
  font-weight: ${props => (props.weight ? props.weight : 700)};
  font-size: ${props => fontSize(props.size)};
`

export default React.memo(
  ({ children, inViewport, forwardedRef, weight, size }) => {
    const trailTitle = useTrail(1, {
      config,
      opacity: inViewport ? 1 : 0,
      x: inViewport ? 0 : 80,
      delay: 250,
      from: { opacity: 0, x: 0 },
    })
    return (
      <>
        {trailTitle.map(({ x, height, ...rest }, index) => (
          <TitleText weight={weight} size={size} ref={forwardedRef}>
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
)
