import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Box from '../../atoms/Box'
import { Link } from '../../atoms/Link'

const Container = styled.nav`
  ${tw`md:mr-12 xl:mr-16 md:ml-auto`}
`

const List = styled.ul`
  display: flex;
  list-style: none;

  & > li:last-child {
    margin-right: 0;
  }
`

const Item = styled.li`
  ${tw`mr-6`}
`

const activeStyle = { color: '#005fda' }

const Navigation = () => (
  <Container>
    <List>
      <Item>
        <Link to="/" fontWeight="bold" activeStyle={activeStyle}>
          Home
        </Link>
      </Item>
      <Item>
        <Link to="/about" fontWeight="bold" activeStyle={activeStyle}>
          About
        </Link>
      </Item>
      <Item>
        <Link to="/projects" fontWeight="bold" activeStyle={activeStyle}>
          Projects
        </Link>
      </Item>
      <Item>
        <Link to="/blog" fontWeight="bold" activeStyle={activeStyle}>
          Articles
        </Link>
      </Item>
    </List>
  </Container>
)

export default Navigation
