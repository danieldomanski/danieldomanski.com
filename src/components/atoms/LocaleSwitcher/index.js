import React, { useContext, useCallback } from 'react'
import { Link } from 'gatsby'
import { Location } from '@reach/router'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'
import tw from 'tailwind.macro'
import { LocaleContext } from '../../templates/Layout'
import Box from '../Box'

const LocaleSpan = styled.span`
  ${tw`relative font-sans uppercase mx-1 cursor-pointer text-sm`}


  color: ${props => (props.active ? '#111' : '#666')};
  font-weight: ${props => (props.active ? 900 : 400)};
  transition: 0.25s;

  &:focus {
    box-shadow: 0px 0px 0px 3px rgba(0, 85, 255, 0.5);
  }
`

const Separator = styled.span``

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

const LocaleSwitcher = ({ theme }) => {
  const [locale] = useContext(LocaleContext)

  return (
    <Box display="flex" alignItems="center" order="2">
      <Location>
        {({ location }) => (
          <>
            <Link to={formatPathname(location.pathname, 'pl')}>
              <LocaleSpan active={locale === 'pl'}>pl</LocaleSpan>
            </Link>
            <Separator>/</Separator>
            <Link to={formatPathname(location.pathname, 'en')}>
              <LocaleSpan active={locale === 'en-pl'}>en</LocaleSpan>
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
