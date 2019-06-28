import React from 'react'
import styled from 'styled-components'
import handleViewport from 'react-in-viewport'
import { Title, Description } from '../../atoms/AnimatedText'
import TextHighlight from '../../atoms/TextHighlight'

import WorkflowGrid from '../../organisms/IndexWorkflowGrid'
import BeforeNumber from '../../atoms/BeforeNumber'
import { SlidableBtn } from '../../atoms/Button'

const Container = styled.div`
  ${tw`w-full inline-flex flex-col justify-center items-start h-screen px-32`}

  & > div, article {
    max-width: 1200px;
    width: 100%;
    margin: 2em auto;
  }
`

const AboutText = styled.div`
  ${tw`my-12`}
`

const Row = styled.div`
  ${tw`flex`}
`

const ViewportTitle = handleViewport(Title, {}, {})
const ViewportDescription = handleViewport(Description, {}, {})

const MeSlide = ({ inViewport, forwardedRef }) => {
  console.log({ inViewport, forwardedRef })

  return (
    <Container isVisible={inViewport} ref={forwardedRef}>
      <AboutText>
        <Row>
          <ViewportTitle>
            <TextHighlight
              size="3xl"
              height="xl"
              weight="bold"
              fontColor="primary-800"
              underlineColor="primary-200"
            >
              How can I help you?
            </TextHighlight>
          </ViewportTitle>
        </Row>
        <ViewportDescription>
          I love to create websites and web applications, paying close attention
          to all the small details. No matter if you are a startup in need of a
          landing page, a small business who wants a unique web shop, or an
          entrepreneur who has an idea for an exciting web application. Contact
          me to work on your needs.
        </ViewportDescription>
      </AboutText>
      <WorkflowGrid />
      <SlidableBtn>learn more about me</SlidableBtn>
    </Container>
  )
}

export default MeSlide
