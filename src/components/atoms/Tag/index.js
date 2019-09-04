import React from 'react'
import { Link } from 'gatsby'
import styled, { withTheme } from 'styled-components'
import tw from 'tailwind.macro'

const Tag = styled(Link)`
  ${tw`inline-block font-sans text-xs px-3 py-2 text-white font-bold mr-2 rounded cursor-pointer no-underline bg-accent.7 hover:bg-accent.8`}
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
