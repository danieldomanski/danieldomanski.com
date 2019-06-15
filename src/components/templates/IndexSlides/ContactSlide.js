import React from 'react'
import styled from 'styled-components'
import { Title } from '../../atoms/AnimatedText'
import { CenteredAbsoluteWrapper } from '../../atoms/Wrapper'

const Container = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0vw;
  top: 400vh;
`

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin: auto;
  padding-left: 4em;
`

const AbsoluteWrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`

const ContactSlide = ({ active, hide }) => (
  <Container>
    <Wrapper>
      <CenteredAbsoluteWrapper active={active} hide={hide}>
        <Title active={active}>Contact</Title>
      </CenteredAbsoluteWrapper>
    </Wrapper>
  </Container>
)

export default ContactSlide
