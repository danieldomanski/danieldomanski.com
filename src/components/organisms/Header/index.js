import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'
import tw from 'tailwind.macro'
import { LocalizedLink } from '../../atoms/Link'
import Text from '../../atoms/Text'
import LocaleSwitcher from '../../atoms/LocaleSwitcher'
import Box from '../../atoms/Box'
import Navigation from '../Navigation'
import { ContentContext } from '../../../context/ContentContext'

const Container = styled.header`
  @media screen and (min-width: 768px) {
    position: ${props => (props.variant === 'primary' ? 'fixed' : 'relative')};
  }

  z-index: 5;
  width: 100%;
  transition: 0.25s;
`

const Brand = styled.div`
  ${tw``};
  order: 1;
`

const Header = ({ theme, variant }) => {
  const [content] = useContext(ContentContext)
  const { brand } = theme.components
  const brandColor = brand[variant].color
  const { header } = content

  return (
    <Container variant={variant}>
      <Box
        width={1}
        maxWidth={['unset', 'unset', 'unset', 'unset', 'unset', '80vw']}
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        alignItems={['center']}
        m="auto"
        px={[6, 8, 8, 12, 12, 16]}
        py={[6, 8, 12]}
      >
        <Brand>
          <LocalizedLink to="/">
            <Text
              fontFamily="sans"
              fontSize={['lg', 'lg', 'xl']}
              fontWeight="black"
              fontColor={brandColor}
              hover={{ color: '#72A6FF' }}
              style={{ letterSpacing: '-1px' }}
            >
              {header.brand}
            </Text>
          </LocalizedLink>
        </Brand>
        <Navigation variant={variant} content={header.nav} />
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
