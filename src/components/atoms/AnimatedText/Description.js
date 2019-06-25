import React from 'react'
import PropTypes from 'prop-types'
import { useSpring, animated } from 'react-spring'
import styled from 'styled-components'
import { fontSize } from '../../helpers/styles'

const config = { mass: 5, tension: 3000, friction: 500 }

const DescriptionText = styled.div`
  ${tw`my-4 overflow-hidden text-primary-800`}
  max-width: 660px;
  line-height: 175%;
  font-size: ${props => fontSize(props.size)};
`

const Description = React.memo(({ children, inViewport, forwardedRef }) => {
  const props = useSpring({
    config,
    opacity: inViewport ? 1 : 0,
    x: inViewport ? 0 : -600,
    delay: inViewport ? 700 : 0,
    from: { opacity: 0, x: -600 },
  })

  return (
    <DescriptionText ref={forwardedRef}>
      <animated.div
        style={{
          ...props,
          transform: props.x.interpolate(x => `translate3d(${x}px,0,0)`),
        }}
      >
        {children}
      </animated.div>
    </DescriptionText>
  )
})

export default Description

Description.propTypes = {
  size: PropTypes.oneOf(['base', 'lg', 'xl', '2xl']),
  inViewport: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
}

Description.defaultProps = {
  size: 'base',
}
