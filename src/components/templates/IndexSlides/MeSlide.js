import React from 'react'
import styled from 'styled-components'
import { Title, Description } from '../../atoms/AnimatedText'

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

const MeSlide = ({ active }) => (
  <>
    <Title active={active}>Me</Title>
    <Description active={active}>
      I am 24 years old web developer with 5 years experience in Computer
      Science field, and 3 years specifically in web enviroment.
      <br />
      My stack is JavaScript oriented, with React.js on the front end and
      Node.js on the back end. I am always eager to learn new things, with the
      aim to improve quality, productivity and speed.
    </Description>
    <Description active={active}>
      I would be a good fit if you are looking for:
      <PositionsList>
        <PositionItem>Full Stack JavaScript Developer</PositionItem>
        <PositionItem>Front end Developer</PositionItem>
        <PositionItem>UI Designer/Developer</PositionItem>
      </PositionsList>
    </Description>
  </>
)

export default MeSlide
