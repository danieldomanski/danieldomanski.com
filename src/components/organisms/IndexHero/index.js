import React from 'react'
import styled from 'styled-components'
import Heading from '../../atoms/Heading/index'
import Paragraph from '../../atoms/Paragraph/index'
import TextHighlight from '../../atoms/TextHighlight'

const Container = styled.section`
  ${tw`bg-primary-200 py-12 px-8 overflow-hidden`};

  width: 100vw;
  box-sizing: border-box;
`

const Block = styled.div`
  ${tw`w-5/6 bg-primary-900`};
  margin: auto;
  margin-top: 3rem;
  height: 3px;
`

const IndexHero = () => (
  <Container>
    <Heading size="5xl" weight="bold">
      Hi,
    </Heading>
    <Heading size="2xl" weight="bold">
      I’m Daniel Domański.
    </Heading>
    <Paragraph>
      I’m a web developer currently based in{' '}
      <TextHighlight size="lg">Szczecin, Poland. </TextHighlight>
      <br />
      Let me help <TextHighlight size="lg">your business grow.</TextHighlight>
    </Paragraph>
    <Block />
  </Container>
)

export default IndexHero
