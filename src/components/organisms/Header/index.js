import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme, css } from 'styled-components'
import LocalizedLink from '../../atoms/LocalizedLink'
import Text from '../../atoms/Text'
import LocaleSwitcher from '../../molecules/LocaleSwitcher'
import Box from '../../atoms/Box'
import Navigation from '../Navigation'
import { ContentContext } from '../../../context/ContentContext'

const Container = styled.header`
  @media screen and (min-width: 768px) {
    position: ${props => (props.variant === 'primary' ? 'fixed' : 'relative')};
  }

  z-index: 5;
  width: 100%;
`

const Brand = styled.div`
  order: 1;
`

const Header = ({ theme, variant }) => {
  if (typeof window !== `undefined`) {
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
          mt={[6, 8, 8]}
        >
          <Brand>
            <LocalizedLink to="/">
              <Text
                fontFamily="sans"
                fontSize={['lg', 'lg', 'xl']}
                fontWeight="black"
                fontColor={brandColor}
                css={{
                  transition: '0.2s',
                }}
                hover={{ color: '#9199BF' }}
                letterSpacing="-0.05em"
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

  return null
}

Header.propTypes = {
  variant: PropTypes.oneOfType(['primary', 'secondary']),
}

Header.defaultProps = {
  variant: 'primary',
}

export default withTheme(Header)
