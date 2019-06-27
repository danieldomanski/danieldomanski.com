import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Link } from '../../atoms/Link'

const Container = styled.nav`
  ${tw`flex flex-col justify-around `}

  & > * {
    ${tw`my-2`}
  }
`

const FooterNavigation = () => (
  <Container>
    <Link>00. Home</Link>
    <Link>01. About</Link>
    <Link>02. Projects</Link>
    <Link>03. Tutorials</Link>
  </Container>
)

export default FooterNavigation
