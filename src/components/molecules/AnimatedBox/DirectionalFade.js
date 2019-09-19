import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import VisibilitySensor from 'react-visibility-sensor'
import useWindowSize from '../../../hooks/useWindowSize'

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
    transform 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
  transition-delay: ${props => props.delay}s;
`
const DirectionalFade = ({ children, delay, direction, px }) => {
  const [visible, set] = React.useState(false)
  const { width } = useWindowSize()
  const isMobile = width < 768

  return (
    <VisibilitySensor
      onChange={vis => {
        set(vis)
      }}
      active={!visible}
      partialVisibility
    >
      <AnimatedContainer
        visible={isMobile ? true : visible}
        delay={delay}
        direction={direction}
        px={px}
      >
        {children}
      </AnimatedContainer>
    </VisibilitySensor>
  )
}

DirectionalFade.propTypes = {
  variant: PropTypes.oneOfType(['primary', 'secondary']),
  delay: PropTypes.number,
  direction: PropTypes.oneOfType(['bottom', 'top', 'left', 'right']),
}

DirectionalFade.defaultProps = {
  variant: 'secondary',
  delay: 0,
  direction: 'bottom',
  px: 40,
}

export default DirectionalFade
