import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Container = styled(Link)`
  ${tw`inline-block font-sans text-xs px-3 py-2 text-black font-medium mr-2 cursor-pointer no-underline bg-primary.2 hover:bg-primary.3`}
  transition: 0.1s ease-in-out;

  &:hover {
    background-color: ${props =>
      props.active ? props.activeHoverColor : props.hoverColor};
  }
`

const Tag = ({ data }) => {
  // ToDo kebabed case
  const { name, slug } = data

  return <Container to={`/tags/${slug}`}>{name}</Container>
}

export default Tag
