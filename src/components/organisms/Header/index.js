import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'
import tw from 'tailwind.macro'
import { LocalizedLink } from '../../atoms/Link'
import Text from '../../atoms/Text'
import LocaleSwitcher from '../../atoms/LocaleSwitcher'
import Box from '../../atoms/Box'
import Navigation from '../Navigation'
import { LocaleContext } from '../../templates/Layout'

const Container = styled.header`
  ${tw`relative `};
  z-index: 7;
  width: 100%;
  transition: 0.25s;
`

const Brand = styled.div`
  ${tw``};
  order: 1;
`

const Header = ({ theme, variant, content }) => {
  const [locale] = useContext(LocaleContext)
  const { brand } = theme.components
  const brandColor = brand[variant].color

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
        px={[8, 8, 12]}
        pt={[8, 8, 12]}
      >
        <Brand>
          <LocalizedLink locale={locale} to="/">
            <Text
              fontSize={['lg', 'xl']}
              fontWeight="black"
              fontColor={brandColor}
              hover={{ color: '#4583FF' }}
              style={{ letterSpacing: '-0.5px' }}
            >
              {content.brand}
            </Text>
          </LocalizedLink>
        </Brand>
        <Navigation variant={variant} locale={locale} content={content.nav} />
        <LocaleSwitcher variant={variant} />
      </Box>
    </Container>
  )
}

Header.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary']),
}

Header.defaultProps = {
  variant: 'primary',
}

export default withTheme(Header)
