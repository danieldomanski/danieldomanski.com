import React from 'react'
import styled from 'styled-components'
import Heading from '../../atoms/Heading/index'
import Paragraph from '../../atoms/Paragraph/index'
import { Description } from '../../atoms/AnimatedText'

const Container = styled.section`
  ${tw`bg-primary-200 pin-l pin-t py-12 px-8 ml-auto`};
  width: calc(100vw - 2em);
  box-sizing: border-box;
`

const Block = styled.div`
  ${tw`w-1/2 bg-primary-900 mt-12`};
  height: 4px;
`

const IndexHeroMobile = () => (
  <Container>
    <Heading size="5xl" weight="bold">
      Hi,
    </Heading>
    <Heading size="2xl" weight="bold">
      I’m Daniel Domański.
    </Heading>
    <Paragraph>
      I’m a web developer currently based in Szczecin, Poland. <br />
      Let me help your business grow.
    </Paragraph>
    <Block />
  </Container>
)

export default IndexHeroMobile
