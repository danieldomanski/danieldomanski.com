import React from 'react'
import styled from 'styled-components'
import CrossedHeading from '../../atoms/CrossedHeading'

const Container = styled.section`
  ${tw`flex justify-center my-8`};
  box-sizing: border-box;
`

const IndexProjects = () => (
  <Container>
    <CrossedHeading>Works</CrossedHeading>
  </Container>
)

export default IndexProjects
