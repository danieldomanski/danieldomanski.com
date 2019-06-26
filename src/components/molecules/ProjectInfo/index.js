import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Heading from '../../atoms/Heading'
import Paragraph from '../../atoms/Paragraph'
import { ProjectsContext } from '../../../context/ProjectsContext'

const Container = styled.div`
  ${tw`flex flex-col`}
`

const ProjectInfo = () => {
  const [projects, , active] = useContext(ProjectsContext)
  if (projects.length === 0) return null

  const { title, description } = projects[active].node.data

  return (
    <Container>
      <Heading>{title.text}</Heading>
      <Paragraph>{description.text}</Paragraph>
    </Container>
  )
}

export default ProjectInfo
