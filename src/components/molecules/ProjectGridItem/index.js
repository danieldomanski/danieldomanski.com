import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const Container = styled.li`
  grid-area: ${props => props.area};
  height: 100%;
  width: 100%;
  background-color: grey;
`

const ProjectGridItem = ({ area }) => <Container area={area}>a</Container>

export default ProjectGridItem
