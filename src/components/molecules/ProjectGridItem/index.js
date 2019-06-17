import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const Container = styled.li`
  ${tw`w-full h-full bg-primary-300`};

  @media screen and (min-width: 768px) {
    grid-area: ${props => props.area};
  }
`

const ProjectGridItem = ({ area }) => <Container area={area}>a</Container>

export default ProjectGridItem
