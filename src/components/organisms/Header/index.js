import React, { useContext } from 'react'
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
`

const Brand = styled.div`
  ${tw``};
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
          px={[8, 8, 8, 12, 12, 16]}
          mt={[8, 8, 8]}
        >
          <Brand>
            <LocalizedLink to="/">
              <Text
                fontFamily="sans"
                fontSize={['lg', 'lg', 'xl']}
                fontWeight="black"
                fontColor={brandColor}
                hover={{ color: '#BED6FF' }}
                style={{ letterSpacing: '-0.04em' }}
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
  variant: PropTypes.oneOf(['primary', 'secondary']),
}

Header.defaultProps = {
  variant: 'primary',
}

export default withTheme(Header)
