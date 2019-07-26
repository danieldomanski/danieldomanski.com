import React from 'react'
import { useSpring, animated } from 'react-spring'

const AnimatedRow = ({
  children,
  inViewport,
  forwardedRef,
  delayTime,
  enterCount,
}) => {
  const visible = inViewport && enterCount < 2
  const style = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: visible ? 1 : 0,
    },
    delay: delayTime,
    config: { mass: 10, tension: 550, friction: 140, duration: 800 },
  })
  console.log({ enterCount })
  return (
    <animated.div inViewport={inViewport} ref={forwardedRef} style={style}>
      {children}
    </animated.div>
  )
}

export default AnimatedRow
