import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { Location } from '@reach/router'
import { withTheme } from 'styled-components'
import css from '@styled-system/css'
import { getLocalizedPathname } from '../../../utilitity/locale'
import Box from '../Box'
import Text from '../Text'

const LocaleSpan = ({ children, active, color, activeColor }) => (
  <Text
    fontColor={active ? activeColor : color}
    fontWeight={active ? 600 : 500}
    fontSize="sm"
    px={1}
    css={css({
      cursor: 'pointer',
      textTransform: 'uppercase',
      transition: '0.1s ease',
    })}
  >
    {children}
  </Text>
)

const LocaleSwitcher = ({ theme, variant }) => {
  const { color, activeColor } = theme.components.localeSwitcher[variant]

  return (
    <Box display="flex" alignItems="center" order="2">
      <Location>
        {({ location }) => {
          const active = location.pathname.split('/')[1] === 'en' ? 'en' : 'pl'
          const isBlog = location.pathname.split('/').includes('blog')

          return (
            <>
              <Link to={getLocalizedPathname(location.pathname, 'pl')}>
                <LocaleSpan
                  color={color}
                  activeColor={activeColor}
                  active={active === 'pl'}
                >
                  pl
                </LocaleSpan>
              </Link>
              <Text
                fontSize="sm"
                as="span"
                fontColor={isBlog ? '#dadada' : color}
                mx={1}
              >
                /
              </Text>
              <Link
                disabled={isBlog}
                style={{
                  pointerEvents: isBlog ? 'none' : 'initial',
                }}
                to={getLocalizedPathname(location.pathname, 'en')}
              >
                <LocaleSpan
                  color={color}
                  activeColor={activeColor}
                  active={active === 'en'}
                >
                  En
                </LocaleSpan>
              </Link>
            </>
          )
        }}
      </Location>
    </Box>
  )
}

LocaleSwitcher.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary']),
}

LocaleSwitcher.defaultProps = {
  variant: 'primary',
}

export default withTheme(LocaleSwitcher)
