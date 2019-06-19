import React from 'react'
import PropTypes from 'prop-types'
import { useTrail, animated } from 'react-spring'
import styled from 'styled-components'
import { fontSize } from '../../helpers/styles'

const config = { mass: 5, tension: 3000, friction: 500 }

const DescriptionText = styled.div`
  ${tw`my-4 overflow-hidden text-primary-800`}
  max-width: 660px;
  line-height: 175%;
  font-size: ${props => fontSize(props.size)};
`

const Description = React.memo(({ children, active, size }) => {
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

export default Description

Description.propTypes = {
  size: PropTypes.oneOf(['base', 'lg', 'xl', '2xl']),
  active: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
}

Description.defaultProps = {
  size: 'base',
}
