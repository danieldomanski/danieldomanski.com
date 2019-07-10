import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Text from '../../atoms/Text'
import Paragraph from '../../atoms/Paragraph'
import { ProjectsContext } from '../../../context/ProjectsContext'

const Container = styled.div`
  ${tw`hidden lg:flex flex-col`}
  max-width: 240px;
`

const ProjectInfo = () => {
  const [projects, , active] = useContext(ProjectsContext)
  if (projects.length === 0) return null

  const { title, description } = projects[active].node.data

  return (
    <Container>
      <Text>{title.text}</Text>
      <Paragraph>{description.text}</Paragraph>
    </Container>
  )
}

export default ProjectInfo
