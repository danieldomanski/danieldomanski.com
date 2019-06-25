import React from 'react'
import styled from 'styled-components'
import handleViewport from 'react-in-viewport'
import { Title, Description } from '../../atoms/AnimatedText'
import TextHighlight from '../../atoms/TextHighlight'

const Container = styled.div`
  ${tw`flex flex-col justify-center w-full h-screen `}
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

const ViewportTitle = handleViewport(Title, {}, {})
const ViewportDescription = handleViewport(Description, {}, {})

const MeSlide = ({ inViewport, forwardedRef, enterCount, leaveCount }) => {
  console.log({ inViewport, forwardedRef })

  return (
    <Container isVisible={inViewport} ref={forwardedRef}>
      <ViewportTitle>Me</ViewportTitle>
      <ViewportDescription>
        I am 24 years old web developer with{' '}
        <TextHighlight height="lg" bottom="xl">
          5 years
        </TextHighlight>{' '}
        experience in Computer Science field, and{' '}
        <TextHighlight height="lg" bottom="xl">
          3 years
        </TextHighlight>{' '}
        specifically in web enviroment.
        <br />
        My stack is JavaScript oriented, with React.js on the front end and
        Node.js on the back end. I am always eager to learn new things, with the
        aim to improve{' '}
        <TextHighlight height="lg" bottom="xl">
          quality, productivity and speed.
        </TextHighlight>
      </ViewportDescription>
      <ViewportDescription>
        I would be a good fit if you are looking for:
        <PositionsList>
          <PositionItem>Full Stack JavaScript Developer</PositionItem>
          <PositionItem>Front end Developer</PositionItem>
          <PositionItem>UI Designer/Developer</PositionItem>
        </PositionsList>
      </ViewportDescription>
    </Container>
  )
}

export default MeSlide
