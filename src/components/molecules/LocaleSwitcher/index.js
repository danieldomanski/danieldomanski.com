import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { Location } from '@reach/router'
import { withTheme } from 'styled-components'
import css from '@styled-system/css'
import { getLocalizedPathname } from '../../../utils/locale'
import Box from '../../atoms/Box'
import Text from '../../atoms/Text'

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

const englishLocaleDisabledPaths = ['blog', 'tags']

const LocaleSwitcher = ({ theme, variant }) => {
  const { color, activeColor, inactiveColor } = theme.components.localeSwitcher[
    variant
  ]

  return (
    <Box display="flex" alignItems="center" order="2">
      <Location>
        {({ location }) => {
          const active = location.pathname.split('/')[1] === 'en' ? 'en' : 'pl'
          const isLocaleVisible = location.pathname
            .split('/')
            .some(element => englishLocaleDisabledPaths.includes(element))

          return (
            <>
              <Link
                to={getLocalizedPathname(location.pathname, 'pl')}
                data-testid="locale-switcher-pl"
              >
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
                fontColor={isLocaleVisible ? inactiveColor : color}
                mx={1}
              >
                /
              </Text>
              <Link
                disabled={isLocaleVisible}
                style={{
                  pointerEvents: isLocaleVisible ? 'none' : 'initial',
                }}
                to={getLocalizedPathname(location.pathname, 'en')}
                data-testid="locale-switcher-en"
              >
                <LocaleSpan
                  color={isLocaleVisible ? inactiveColor : color}
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
  variant: PropTypes.oneOfType(['primary', 'secondary']),
}

LocaleSwitcher.defaultProps = {
  variant: 'primary',
}

export default withTheme(LocaleSwitcher)
