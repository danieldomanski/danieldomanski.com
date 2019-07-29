import React, { useState, useCallback, useContext } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Text from '../../atoms/Text'
import LocaleSwitcher from '../../atoms/LocaleSwitcher'
import Box from '../../atoms/Box'
import Navigation from '../Navigation'

const Container = styled.header`
  ${tw`static md:fixed pin-t text-primary-700`};
  z-index: 6;
  width: 100%;
  transition: 0.25s;
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
      <Box
        display="flex"
        flexDirection={['column', 'column', 'row']}
        justifyContent="space-between"
        alignItems={['flex-start', 'flex-start', 'center']}
        m="auto"
        maxWidth={1600}
        px={[8, 8, 8, 16, 24]}
        py={[8, 8, 12, 16]}
      >
        <Box
          width={1}
          display="flex"
          justifyContent="space-between"
          mb={[4, 4, 0]}
        >
          <Link to="/">
            <Text
              fontSize="xl"
              fontWeight="black"
              fontColor="primary.8"
              hover={{ color: '#0055FF' }}
              style={{ letterSpacing: '-0.5px' }}
            >
              Daniel Domański
            </Text>
          </Link>
          <LocaleSwitcher variant={variant} />
        </Box>
        <Navigation />
      </Box>
    </Container>
  )
}

export default Header
