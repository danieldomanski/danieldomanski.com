import React from 'react'
import { Link } from 'gatsby'
import styled, { withTheme } from 'styled-components'
import tw from 'tailwind.macro'

const Tag = styled(Link)`
  ${tw`font-sans text-xs px-4 py-2 text-primary-800 font-bold mr-2 rounded cursor-pointer no-underline bg-primary-200 hover:bg-primary-300`}
  transition: 0.1s ease-in-out;

  &:hover {
    background-color: ${props =>
      props.active ? props.activeHoverColor : props.hoverColor};
  }
`

const Filter = ({ data }) => {
  // ToDo kebabed case
  const { name, slug } = data

  return <Tag to={`/tags/${slug}`}>{name}</Tag>
}

export default withTheme(Filter)
