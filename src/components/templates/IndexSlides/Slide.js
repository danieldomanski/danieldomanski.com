import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 100%;
  width: 100%;
  transition: 1s top cubic-bezier(0.5, 0.02, 0.1, 1) 0s,
    1s opacity cubic-bezier(0.5, 0.02, 0.1, 1) 0.25s;
`

const Slide = React.memo(({ children, active, position }) => (
  <Container position={position} active={active}>
    {children}
  </Container>
))

export default Slide
