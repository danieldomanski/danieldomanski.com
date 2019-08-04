import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Box from '../../atoms/Box'
import { Link } from '../../atoms/Link'

const Container = styled.nav`
  ${tw`flex items-center w-full md:ml-auto mt-4`}
  order: 3;

  @media screen and (min-width: 768px) {
    ${tw`w-auto mt-0 ml-auto md:mr-12 xl:mr-16`}
    order: 2;
    width: auto;
    margin-top: 0;
    margin-left: auto;
    margin-right: 3rem;
  }
`

const List = styled.ul`
  ${tw`flex flex-wrap`}

  list-style: none;

  & > li:last-child {
    margin-right: 0;
  }
`

const Item = styled.li`
  ${tw`mr-8 my-2`}
`

const activeStyle = {
  color: '#0055FF',
  borderBottom: '2px solid #0055FF',
  paddingBottom: '6px',
}

const Navigation = () => (
  <Container>
    <List>
      <Item>
        <Link
          to="/"
          fontSize={['sm', 'sm', 'base']}
          fontWeight="bold"
          fontColor="primary.7"
          activeStyle={activeStyle}
        >
          Home
        </Link>
      </Item>
      <Item>
        <Link
          to="/projects"
          fontSize={['sm', 'sm', 'base']}
          fontWeight="bold"
          fontColor="primary.7"
          partiallyActive
          activeStyle={activeStyle}
        >
          Projects
        </Link>
      </Item>
      <Item>
        <Link
          to="/blog"
          fontSize={['sm', 'sm', 'base']}
          fontWeight="bold"
          fontColor="primary.7"
          partiallyActive
          activeStyle={activeStyle}
        >
          Articles
        </Link>
      </Item>
      <Item>
        <Link
          to="/about"
          fontSize={['sm', 'sm', 'base']}
          fontWeight="bold"
          fontColor="primary.7"
          activeStyle={activeStyle}
        >
          About
        </Link>
      </Item>
    </List>
  </Container>
)

export default Navigation
