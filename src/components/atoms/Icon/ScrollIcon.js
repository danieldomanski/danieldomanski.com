import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import DirectionalFade from '../../molecules/AnimatedBox/DirectionalFade'

const containerAnimation = keyframes`
0% { transform: translateY(0) }
50% { transform: translateY(4px) }
100% { transform: translateY(0) }
`

const scrollAnimation = keyframes`
0% { transform: translateY(0); opacity: .75; }
50% { transform: translateY(2px); opacity: .5; }
100% { transform: translateY(0); opacity: .75; }
`

const Wrapper = styled.svg`
  stroke: currentColor;
  vertical-align: middle;
  animation: ${containerAnimation} 2s ease 2s infinite;
`

const AnimatedScroller = styled.rect`
  animation: ${scrollAnimation} 2s ease infinite;
`

const LinkContainer = styled(Link)`
  display: none;
  position: absolute;
  bottom: 3rem;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 6;
  width: 30px;

  @media screen and (min-width: 768px) {
    display: inline-block;
  }
`

const Scroller = ({ width, height }) => (
  <LinkContainer to="/#about">
    <DirectionalFade delay={2}>
      <Wrapper
        width={width}
        height={height}
        viewBox="0 0 40 60"
        preserveAspectRatio="none"
        fill="none"
      >
        <rect
          x="5"
          y="6"
          width="30"
          height="48"
          rx="15"
          stroke="rgba(240,240,240,0.75)"
          strokeWidth="2"
        />
        <AnimatedScroller
          x="18"
          y="14"
          width="3"
          height="14"
          rx="6"
          fill="white"
        />
      </Wrapper>
    </DirectionalFade>
  </LinkContainer>
  )

Scroller.propTypes = {
  width: PropTypes.number,
  height: PropTypes.height,
}

Scroller.defaultProps = {
  width: 30,
  height: 45,
}

export default Scroller
