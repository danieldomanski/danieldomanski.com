import React from 'react'
import styled from 'styled-components'
import { Title, Description } from '../../atoms/AnimatedText'

const Box = styled.div`
  width: 100%;
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: center;
  font-family: sans-serif;
  position: absolute;
  font-family: 'Playfair Display', serif;
`

const BeforeNumber = styled.span`
  font-size: 360px;
  font-weight: 900;
  position: absolute;
  opacity: 0.2;
  z-index: -1;
  left: -220px;
  visibility: ${props => (props.active ? 'visible' : 'hidden')};
  color: #d1d1d1;
`

const SubSlide = React.memo(({ active, config }) => {
  const { title, description, idx } = config

  return (
    <Box active={active}>
      <Title active={active}>{title}</Title>
      <Description active={active}>{description}</Description>
      <BeforeNumber active={active}>{`0${idx + 1}`}</BeforeNumber>
    </Box>
  )
})

export default SubSlide
