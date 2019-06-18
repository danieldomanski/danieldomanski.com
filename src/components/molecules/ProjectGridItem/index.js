import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { pathToFileURL } from 'url'

const Container = styled.li`
  ${tw`w-full h-full bg-primary-300`};

  @media screen and (min-width: 768px) {
    grid-area: ${props => props.area};
  }
`

const ProjectGridItem = ({ project, area }) => {
  const { body, description, title, uid } = project.node.data

  return <Container area={area}>{title.text}</Container>
}

export default ProjectGridItem
