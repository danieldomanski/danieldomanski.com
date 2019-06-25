import React, { useState, useCallback, useContext } from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Logo from '../../atoms/Logo'
import Heading from '../../atoms/Heading'
import LocaleSwitcher from '../../atoms/LocaleSwitcher'
import NavigationHamburger from '../../atoms/NavigationHamburger'
import NavigationCover from '../NavigationCover'
import { ScrollContext } from '../../../context/ScrollContext'

const Container = styled.header`
  ${tw`fixed pin-t z-10 flex items-center justify-between  text-primary-700 px-8 md:px-24 xl:px-32`};
  box-sizing: border-box;
  width: 100%;
  box-shadow: ${props =>
    props.isScrolled ? '1px 2px 18px rgba(0,0,0,.15)' : 'none'};
  background-color: ${props => (props.isScrolled ? '#f0f0f0' : 'transparent')};
  height: ${props => (props.isScrolled ? '80px' : '100px')};
  transition: 0.25s;
`

const LogoContainer = styled.div`
  ${tw`flex align-items  items-center`};
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
  const isScrolled = scroll.y > 768

  return (
    <Container isScrolled={isScrolled}>
      <LogoContainer>
        <Logo />
        <Heading size="lg" weight="black" hiddenOnMobile>
          ddomanski.dev
        </Heading>
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
