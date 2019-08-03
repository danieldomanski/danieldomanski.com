import React, { useState, useCallback } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Text from '../../atoms/Text'
import LocaleSwitcher from '../../atoms/LocaleSwitcher'
import Box from '../../atoms/Box'
import Navigation from '../Navigation'

const Container = styled.header`
  ${tw`text-primary-700`};
  z-index: 6;
  width: 100%;
  transition: 0.25s;
`

const Brand = styled.div`
  ${tw``};
  order: 1;
`

const Header = ({ variant }) => {
  const [isNavOpen, toggle] = useState(false)
  const toggleNav = useCallback(() => toggle(!isNavOpen), [isNavOpen])

  return (
    <Container>
      <Box
        width={1}
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        alignItems={['center']}
        m="auto"
        maxWidth={1600}
        px={[8, 8, 8, 16, 24]}
        pt={[8, 8, 8]}
      >
        <Brand>
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
        </Brand>
        <Navigation />
        <LocaleSwitcher variant={variant} />
      </Box>
    </Container>
  )
}

export default Header
