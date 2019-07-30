import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Box from '../../atoms/Box'
import { Link } from '../../atoms/Link'

const Container = styled.nav`
  ${tw`flex items-center w-full md:ml-auto mt-6`}
  order: 3;

  @media screen and (min-width: 768px) {
    ${tw`w-auto mt-0 ml-auto md:mr-12 xl:mr-24`}
    order: 2;
    width: auto;
    margin-top: 0;
    margin-left: auto;
    margin-right: 3rem;
  }
`

const List = styled.ul`
  ${tw`flex`}

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
        <Link
          to="/"
          fontWeight="bold"
          fontColor="primary.7"
          activeStyle={activeStyle}
        >
          Home
        </Link>
      </Item>
      <Item>
        <Link
          to="/about"
          fontWeight="bold"
          fontColor="primary.7"
          activeStyle={activeStyle}
        >
          About
        </Link>
      </Item>
      <Item>
        <Link
          to="/projects"
          fontWeight="bold"
          fontColor="primary.7"
          activeStyle={activeStyle}
        >
          Projects
        </Link>
      </Item>
      <Item>
        <Link
          to="/blog"
          fontWeight="bold"
          fontColor="primary.7"
          activeStyle={activeStyle}
        >
          Articles
        </Link>
      </Item>
    </List>
  </Container>
)

export default Navigation
