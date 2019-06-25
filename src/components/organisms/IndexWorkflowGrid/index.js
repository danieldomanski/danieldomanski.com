import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import WorkflowGridItem from '../../molecules/WorkflowGridItem'

const Container = styled.ul`
  ${tw`flex mx-8 `}
  flex-wrap: wrap;
  list-style: none;
`

const items = [
  {
    title: 'Sketch',
    description:
      'Sketch / idea is part in which we work together on desired outcome.',
  },
  {
    title: 'Design',
    description:
      'Sketch / idea is part in which we work together on desired outcome..  No matter if you are a startup in need of a landing page.',
  },
  {
    title: 'Ui Elements',
    description:
      'Sketch / idea is part in which we work together on desired outcome..  No matter if you are a startup in need of a landing page.',
  },
  {
    title: 'Interactivity',
    description:
      'Sketch / idea is part in which we work together on desired outcome.',
  },
  {
    title: 'Code',
    description:
      'Sketch / idea is part in which we work together on desired outcome.',
  },
  {
    title: 'Maintain',
    description:
      'Sketch / idea is part in which we work together on desired outcome.',
  },
]

const WorkflowGrid = () => (
  <Container>
    {items.map((item, idx) => {
      const { title, description } = item
      return <WorkflowGridItem config={{ idx, title, description }} />
    })}
  </Container>
)

export default WorkflowGrid
