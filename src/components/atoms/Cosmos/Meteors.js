import React from 'react'
import styled, { keyframes } from 'styled-components'
import Icon from '../Icon'

// Meteors
const meteorAnimation1 = keyframes`
0% { transform: translate3d(-20vw, -60vh, 0); opacity: 0 }
1% { transform: translate3d(-20vw, -60vh, 0); opacity: 1 }
21% { transform: translate3d(100vw, 100vh, 0);  opacity: 0}
100% { transform: translate3d(100vw, 100vh, 0);  opacity: 0 }
`

const meteorAnimation2 = keyframes`
0% { transform: translate3d(40vw, -40vh, 0); opacity: 0 }
1% { transform: translate3d(40vw, -40vh, 0); opacity: 1 }
21% { transform: translate3d(120vw, 100vh, 0); opacity: 0 }
100% { transform: translate3d(120vw, 100vh, 0); opacity: 0 }
`

const meteorAnimation3 = keyframes`
0% { transform: translate3d(-20vw, -20vh, 0);  opacity: 0 }
1% { transform: translate3d(-20vw, -20vh, 0);  opacity: 1 }
21% { transform: translate3d(80vw, 120vh, 0); opacity: 0 }
100% { transform: translate3d(80vw, 120vh, 0); opacity: 0 }
`

const meteorAnimation4 = keyframes`
0% { transform: translate3d(-20vw, 20vh, 0); opacity: 0 }
1% { transform: translate3d(-20vw, 20vh, 0); opacity: 1 }
15% { transform: translate3d(80vw, 140vh, 0); opacity: 0 }
100% { transform: translate3d(80vw, 140vh, 0); opacity: 0 }
`

const MeteorsContainer = styled.div`
  display: ${props => (props.visible ? 'block' : 'none')};

  @media screen and (min-width: 1440px) {
    display: none;
  }

  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;

  & svg:first-child {
    animation: ${meteorAnimation1} 12s linear 2s infinite both;
  }

  & svg:nth-child(2) {
    animation: ${meteorAnimation2} 10s linear 4s infinite both;
  }

  & svg:nth-child(3) {
    animation: ${meteorAnimation3} 12s linear 6s infinite both;
  }

  & svg:nth-child(4) {
    animation: ${meteorAnimation4} 10s linear 7s infinite both;
  }

  & svg:nth-child(5) {
    animation: ${meteorAnimation3} 12s linear 8s infinite both;
  }

  & svg:last-child {
    animation: ${meteorAnimation4} 12s linear 3s infinite both;
  }
`

const Meteors = ({ visible }) => (
  <MeteorsContainer visible={visible}>
    <Icon icon="comet" width={32} height={23} />
    <Icon icon="comet" width={48} height={35} />
    <Icon icon="comet" width={64} height={46} />
    <Icon icon="comet" width={80} height={56} />
    <Icon icon="comet" width={64} height={46} />
    <Icon icon="comet" width={80} height={56} />
  </MeteorsContainer>
)

export default Meteors
