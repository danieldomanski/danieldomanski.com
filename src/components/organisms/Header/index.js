import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Logo from '../../atoms/Logo'
import Heading from '../../atoms/Heading'
import LocaleSwitcher from '../../atoms/LocaleSwitcher'
import NavigationHamburger from '../../atoms/NavigationHamburger'
import NavigationCover from '../NavigationCover'

const Container = styled.header`
  ${tw`flex items-center justify-between z-100 py-12 text-primary-700 mx-8 md:mx-12 xl:mx-24`};
`

const InnerContainer = styled.div`
  ${tw`flex`};
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
  const toggleNav = useCallback(() => toggle(!isNavOpen), [isNavOpen])

  return (
    <Container>
      <LogoContainer>
        <Logo />
        <Heading size="lg" weight="black">
          ddomanski.dev
        </Heading>
      </LogoContainer>
      <InnerContainer>
        <LocaleSwitcher />
        <NavMenu onClick={toggleNav} data-testid="nav-hamburger">
          <NavigationHamburger isNavOpen={isNavOpen} />
        </NavMenu>
      </InnerContainer>
      <NavigationCover isNavOpen={isNavOpen} />
    </Container>
  )
}

export default Header
