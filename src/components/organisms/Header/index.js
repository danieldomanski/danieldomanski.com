import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { LocalizedLink } from '../../atoms/Link'
import Text from '../../atoms/Text'
import LocaleSwitcher from '../../atoms/LocaleSwitcher'
import Box from '../../atoms/Box'
import Navigation from '../Navigation'
import { LocaleContext } from '../../templates/Layout'

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

const Header = ({ variant, location }) => {
  const [isNavOpen, toggle] = useState(false)
  const [locale] = useContext(LocaleContext)
  console.log('hh ', locale)
  return (
    <Container>
      <Box
        width={1}
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        alignItems={['center']}
        m="auto"
        maxWidth={1400}
        px={[6, 6, 12, 16, 24]}
        pt={[8]}
      >
        <Brand>
          <LocalizedLink locale={locale} to="/">
            <Text
              fontSize="xl"
              fontWeight="black"
              fontColor="primary.8"
              hover={{ color: '#0055FF' }}
              style={{ letterSpacing: '-0.6px' }}
            >
              Daniel Domański
            </Text>
          </LocalizedLink>
        </Brand>
        <Navigation locale={locale} />
        <LocaleSwitcher variant={variant} location={location} />
      </Box>
    </Container>
  )
}

export default Header
