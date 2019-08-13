import React from 'react'
import styled from 'styled-components'
import { useSpring, animated } from 'react-spring'
import VisibilitySensor from 'react-visibility-sensor'

const AnimatedContainer = styled.div`
  transform: translateY(${props => (props.visible ? 0 : 40)}px);
  opacity: ${props => (props.visible ? 1 : 0)};
  transition: opacity 0.6s cubic-bezier(0.215, 0.61, 0.355, 1),
    transform 0.7s cubic-bezier(0.215, 0.61, 0.355, 1);
  transition-delay: ${props => props.delay}s;
`

export default React.memo(({ children, delay = 0 }) => {
  const [visible, set] = React.useState(false)

  return (
    <VisibilitySensor onChange={vis => set(vis)} active={!visible}>
      <AnimatedContainer visible={visible} delay={delay}>
        {children}
      </AnimatedContainer>
    </VisibilitySensor>
  )
})
