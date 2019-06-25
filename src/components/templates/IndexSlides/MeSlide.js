import React from 'react'
import styled from 'styled-components'
import handleViewport from 'react-in-viewport'
import { Title, Description } from '../../atoms/AnimatedText'
import TextHighlight from '../../atoms/TextHighlight'
import Subheading from '../../atoms/Subheading'
import WorkflowGrid from '../../organisms/IndexWorkflowGrid'
import BeforeNumber from '../../atoms/BeforeNumber'
import { SlidableBtn } from '../../atoms/Button'

const Container = styled.div`
  ${tw`inline-flex flex-col justify-center items-start h-screen `}
`

const PositionsList = styled.ul`
  ${tw`p-0 m-0 py-4`};
  list-style-type: none;
`

const PositionItem = styled.li`
  ${tw`relative `};

  &:before {
    content: '';
    width: 0px;
    height: 0px;
    border-style: solid;
    border-width: 6px 0 6px 12px;
    border-color: transparent transparent transparent #ccc;
    display: inline-block;
    vertical-align: middle;
    margin-right: 12px;
    transform: rotate(0deg);
  }
`

const Row = styled.div`
  ${tw`flex`}
`

const ViewportTitle = handleViewport(Title, {}, {})
const ViewportDescription = handleViewport(Description, {}, {})

const MeSlide = ({ inViewport, forwardedRef, enterCount, leaveCount }) => {
  console.log({ inViewport, forwardedRef })

  return (
    <Container isVisible={inViewport} ref={forwardedRef}>
      <Row>
        <BeforeNumber>01</BeforeNumber>
        <ViewportTitle>How can I help you?</ViewportTitle>
      </Row>
      <ViewportDescription>
        I love to create websites and web applications, paying close attention
        to all the small details. No matter if you are a startup in need of a
        landing page, a small business who wants a unique web shop, or an
        entrepreneur who has an idea for an exciting web application. Contact me
        to work on your needs.
      </ViewportDescription>
      <Subheading>Workflow.</Subheading>
      <WorkflowGrid />
      <SlidableBtn>view about page</SlidableBtn>
    </Container>
  )
}

export default MeSlide
