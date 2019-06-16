import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

import { MobileNavLink } from '../../atoms/Link'

const NavCover = styled.div`
${tw`fixed pin-t pin-l h-screen w-screen z-10 bg-primary-100 `}

visibility: ${props => (props.isNavOpen ? 'visible' : 'hidden')};
opacity: ${props => (props.isNavOpen ? 1 : 0)};
transition: 0.5s;
transition-delay: 0.375s;
`

const MobileNav = styled.ul`
  ${tw`relative h-screen flex flex-col items-center justify-center list-none`};
`

const MobileNavItem = styled.li`
  ${tw`inline-block my-8 text-xl`};
`

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'About', href: '/about' },
]

const NavigationCover = ({ isNavOpen }) => (
  <NavCover isNavOpen={isNavOpen}>
    <MobileNav>
      {navigation.map((item, idx) => (
        <MobileNavItem>
          <MobileNavLink to={item.href}>{item.name}</MobileNavLink>
        </MobileNavItem>
      ))}
    </MobileNav>
  </NavCover>
)

export default NavigationCover
