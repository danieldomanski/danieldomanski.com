import styled, { keyframes } from 'styled-components'

const FadeAnimation = keyframes`
0% { opacity: 0; transform: 'translate3d(-100%,0,0)'}
100% { opacity: 1; transform: 'translate3d(0%,0,0)'}
`

export default styled.div`
  animation: ${FadeAnimation} 0.2s linear 0.25s both;
`
