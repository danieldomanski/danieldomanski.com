import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const WorkflowItem = styled.li`
  ${tw`w-1/3 p-4 `}
  box-sizing: border-box;
`

const WorkflowItemHeading = styled.li`
  ${tw``}
`

const WorkflowItemDescription = styled.li`
  ${tw``}
`

const WorkflowGridItem = ({ config }) => {
  const { idx, title, description } = config

  return (
    <WorkflowItem>
      <WorkflowItemHeading>
        <span>{idx}</span>
        {title}
      </WorkflowItemHeading>
      <WorkflowItemDescription>{description}</WorkflowItemDescription>
    </WorkflowItem>
  )
}

export default WorkflowGridItem
