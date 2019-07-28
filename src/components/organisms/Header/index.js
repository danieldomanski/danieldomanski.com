import React, { useState, useCallback, useContext } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Text from '../../atoms/Text'
import LocaleSwitcher from '../../atoms/LocaleSwitcher'
import NavigationHamburger from '../../molecules/NavigationHamburger'
import NavigationCover from '../NavigationCover'

const Container = styled.header`
  ${tw`absolute md:fixed pin-t py-12 text-primary-700 px-8 xl:px-16`};
  background: linear-gradient(rgba(0, 0, 0, 0.2), transparent);
  z-index: 6;
  width: 100%;
  transition: 0.25s;
`

const Wrapper = styled.div`
  ${tw`flex items-center justify-between m-auto`}
  max-width: 1600px;
  margin: auto;
`

const LogoContainer = styled.div`
  ${tw`flex align-items  items-center`};
`

const NavMenu = styled.div`
  ${tw`relative block md:hidden`}

  width: 24px;
  height: 18px;
  transition: 0.25s;
`

const Header = ({ variant }) => {
  const [isNavOpen, toggle] = useState(false)
  const toggleNav = useCallback(() => toggle(!isNavOpen), [isNavOpen])

  return (
    <Container>
      <Wrapper>
        <LogoContainer>
          <Text fontSize="xl" fontWeight="black" fontColor="primary.8">
            Daniel Domański
          </Text>
        </LogoContainer>
        <LocaleSwitcher variant={variant} />
        <NavMenu onClick={toggleNav}>
          <NavigationHamburger isNavOpen={isNavOpen} />
        </NavMenu>
        <NavigationCover isNavOpen={isNavOpen} />
      </Wrapper>
    </Container>
  )
}

export default Header
