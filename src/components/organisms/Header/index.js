import React, { useState, useCallback, useContext } from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Logo from '../../atoms/Logo'
import LocaleSwitcher from '../../atoms/LocaleSwitcher'
import NavigationHamburger from '../../molecules/NavigationHamburger'
import NavigationCover from '../NavigationCover'
import { ScrollContext } from '../../../context/ScrollContext'
import { ContentWrapper } from '../../atoms/Wrapper'

const Container = styled.header`
  ${tw`fixed pin-t py-8 text-primary-700 px-24`};

  background-color: #e0e0e0;
  width: 100%;
  transition: 0.25s;
`

const Wrapper = styled(ContentWrapper)`
  ${tw`flex items-center justify-between`}
`

const LogoContainer = styled.div`
  ${tw`flex align-items  items-center`};
`

const Heading = styled.h1`
  ${tw`text-lg font-normal ml-1`}
`

const NavMenu = styled.div`
  ${tw`relative block md:hidden`}

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
      <Wrapper>
        <LogoContainer>
          <Logo isScrolled={isScrolled} />
          <Heading isScrolled={isScrolled} />
        </LogoContainer>
        <LocaleSwitcher />
        <NavMenu onClick={toggleNav} data-testid="nav-hamburger">
          <NavigationHamburger isNavOpen={isNavOpen} />
        </NavMenu>
        <NavigationCover isNavOpen={isNavOpen} />
      </Wrapper>
    </Container>
  )
}

export default Header
