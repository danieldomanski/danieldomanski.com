import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const WorkflowItem = styled.li`
  ${tw`w-1/3 py-4`}
  box-sizing: border-box;
`

const WorkflowItemHeading = styled.li`
  ${tw`font-sans font-bold uppercase text-base`}

  & span {
    ${tw`mr-4`}
  }
`

const WorkflowItemDescription = styled.li`
  ${tw`font-sans text-sm my-4`}
  max-width: 250px;
`

const WorkflowGridItem = ({ config }) => {
  const { idx, title, description } = config

  return (
    <WorkflowItem>
      <WorkflowItemHeading>
        <span>0{idx}.</span>
        {title}
      </WorkflowItemHeading>
      <WorkflowItemDescription>{description}</WorkflowItemDescription>
    </WorkflowItem>
  )
}

export default WorkflowGridItem
