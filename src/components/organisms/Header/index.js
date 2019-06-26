import React, { useState, useCallback, useContext } from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Logo from '../../atoms/Logo'
import LocaleSwitcher from '../../atoms/LocaleSwitcher'
import NavigationHamburger from '../../molecules/NavigationHamburger'
import NavigationCover from '../NavigationCover'
import { ScrollContext } from '../../../context/ScrollContext'

const Container = styled.header`
  ${tw`fixed pin-t z-10 flex items-center justify-between py-8 text-primary-700 px-8 md:px-24 xl:px-32`};

  background-color: #e0e0e0;
  width: 100%;

  transition: 0.25s;
`

const LogoContainer = styled.div`
  ${tw`flex align-items  items-center`};
`

const Heading = styled.h1`
  ${tw`text-lg font-normal ml-1`}
`

const NavMenu = styled.div`
  position: relative;
  width: 24px;
  height: 18px;
  transition: 0.25s;
`

const Header = () => {
  const [isNavOpen, toggle] = useState(false)
  const [scroll] = useContext(ScrollContext)
  const toggleNav = useCallback(() => toggle(!isNavOpen), [isNavOpen])
  const isScrolled = scroll.y > 920

  return (
    <Container isScrolled={isScrolled}>
      <LogoContainer>
        <Logo isScrolled={isScrolled} />
        <Heading isScrolled={isScrolled}>ddomanski.dev</Heading>
      </LogoContainer>

      <LocaleSwitcher />
      <NavMenu onClick={toggleNav} data-testid="nav-hamburger">
        <NavigationHamburger isNavOpen={isNavOpen} />
      </NavMenu>

      <NavigationCover isNavOpen={isNavOpen} />
    </Container>
  )
}

export default Header
