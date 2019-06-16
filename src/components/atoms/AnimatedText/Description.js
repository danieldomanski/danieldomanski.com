import React from 'react'
import { useTrail, animated } from 'react-spring'
import styled from 'styled-components'

const config = { mass: 5, tension: 3000, friction: 500 }

const DescriptionText = styled.div`
  margin: 1em 0;
  max-width: 660px;
  font-size: 21px;
  overflow: hidden;
  color: #636363;
  line-height: 175%;
`

export default React.memo(({ children, active }) => {
  const trailDescription = useTrail(1, {
    config,
    opacity: active ? 1 : 0,
    x: active ? 1 : -600,
    height: active ? 80 : 0,
    delay: active ? 1500 : 0,
    from: { opacity: 0, x: 0, height: 0 },
  })

  return (
    <DescriptionText active={active}>
      {trailDescription.map(({ x, height, ...rest }, index) => (
        <animated.div
          key={`0${index}`}
          style={{
            ...rest,
            transform: x.interpolate(x => `translate3d(${x}px,0,0)`),
          }}
        >
          <animated.div>{children}</animated.div>
        </animated.div>
      ))}
    </DescriptionText>
  )
})
