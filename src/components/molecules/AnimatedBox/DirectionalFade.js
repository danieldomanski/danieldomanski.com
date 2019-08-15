import React from 'react'
import styled from 'styled-components'
import VisibilitySensor from 'react-visibility-sensor'

const getTranslateValue = (direction, px) =>
  direction === 'bottom' || direction === 'right' ? px : -px

const getTransform = (direction, px) =>
  direction === 'left' || direction === 'right'
    ? `translateX(${getTranslateValue(direction, px)}px)`
    : `translateY(${getTranslateValue(direction, px)}px)`

const AnimatedContainer = styled.div`
  transform: ${props =>
    props.visible
      ? `translate3d(0,0,0)`
      : getTransform(props.direction, props.px)};
  opacity: ${props => (props.visible ? 1 : 0)};
  transition: opacity 0.6s cubic-bezier(0.215, 0.61, 0.355, 1),
    transform 0.8s cubic-bezier(0.215, 0.61, 0.355, 1);
  transition-delay: ${props => props.delay}s;
`

export default React.memo(
  ({ children, delay = 0, direction = 'bottom', px = 120, offset = 450 }) => {
    const [visible, set] = React.useState(false)

    return (
      <VisibilitySensor
        onChange={vis => set(vis)}
        active={!visible}
        partialVisibility
        offset={{ top: offset }}
      >
        <AnimatedContainer
          visible={visible}
          delay={delay}
          direction={direction}
          px={px}
        >
          {children}
        </AnimatedContainer>
      </VisibilitySensor>
    )
  }
)
