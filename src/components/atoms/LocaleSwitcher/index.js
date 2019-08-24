import React, { useContext } from 'react'
import { Link } from 'gatsby'
import { Location } from '@reach/router'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'
import tw from 'tailwind.macro'
import { LocaleContext } from '../../templates/Layout'
import Box from '../Box'
import Text from '../Text'

const LocaleSpan = styled.span`
  ${tw`relative text-sm  font-sans uppercase cursor-pointer `}


  color: ${props => (props.active ? props.activeColor : props.color)};
  font-weight: ${props => (props.active ? 700 : 400)};

`

const formatPathname = (pathname, locale) => {
  const splitted = pathname.split('/')
  splitted.shift()
  const currentLocale = splitted[0] === 'en' ? 'en' : 'pl'

  if (currentLocale === locale) return splitted.join('/')

  if (locale === 'en') {
    splitted.unshift('en')
  }

  if (locale === 'pl') {
    splitted.shift('pl')
  }

  return splitted.join('/')
}

const LocaleSwitcher = ({ theme, variant }) => {
  const [locale] = useContext(LocaleContext)
  const { color, activeColor } = theme.components.localeSwitcher[variant]

  return (
    <Box display="flex" alignItems="center" order="2">
      <Location>
        {({ location }) => (
          <>
            <Link to={formatPathname(location.pathname, 'pl')}>
              <LocaleSpan
                color={color}
                activeColor={activeColor}
                active={locale === 'pl'}
              >
                Pl
              </LocaleSpan>
            </Link>
            <Text fontSize="sm" as="span" fontColor="primary.5" mx={2}>
              /
            </Text>
            <Link to={formatPathname(location.pathname, 'en')}>
              <LocaleSpan
                color={color}
                activeColor={activeColor}
                active={locale === 'en-pl'}
              >
                En
              </LocaleSpan>
            </Link>
          </>
        )}
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
