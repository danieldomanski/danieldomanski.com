import React from 'react'
import styled from 'styled-components'
import { CenteredAbsoluteWrapper } from '../../atoms/Wrapper'

const Container = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0vw;
  top: ${props => props.position}vh;
  visibility: ${props => (props.active ? 'visible' : 'hidden')};
  opacity: ${props => (props.active ? 1 : 0)};
  transition: 1s top cubic-bezier(0.5, 0.02, 0.1, 1) 0s,
    1s opacity cubic-bezier(0.5, 0.02, 0.1, 1) 0.25s;
`

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin: auto;
`

const Slide = React.memo(({ children, active, position }) => (
  <Container position={position} active={active}>
    <Wrapper>
      <CenteredAbsoluteWrapper>{children}</CenteredAbsoluteWrapper>
    </Wrapper>
  </Container>
))

export default Slide
