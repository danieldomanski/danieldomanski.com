import React, { useContext } from 'react'
import { Link } from 'gatsby'
import { Location } from '@reach/router'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'
import tw from 'tailwind.macro'
import { LocaleContext } from '../../templates/Layout'
import Box from '../Box'
import Icon from '../Icon'

const LocaleSpan = styled.span`
  ${tw`relative font-sans uppercase mx-1 cursor-pointer`}


  color: ${props => (props.active ? props.activeColor : props.color)};
  font-weight: ${props => (props.active ? 700 : 400)};
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

const LocaleSwitcher = ({ theme, variant }) => {
  const [locale] = useContext(LocaleContext)
  const { color, activeColor } = theme.components.localeSwitcher[variant]

  return (
    <Box display="flex" alignItems="center" order="2">
      <Location>
        {({ location }) => (
          <>
            <Link to={formatPathname(location.pathname, 'pl')}>
              <Icon
                icon="poland"
                width={28}
                height={26}
                style={{
                  display: locale === 'pl' ? 'none' : 'inline-block',
                  border: '2px solid #fff',
                  borderRadius: '50%',
                }}
              />
            </Link>
            <Link to={formatPathname(location.pathname, 'en')}>
              <Icon
                icon="greatBritain"
                width={28}
                height={26}
                style={{
                  display: locale === 'en-pl' ? 'none' : 'inline-block',
                  border: '2px solid #fff',
                  borderRadius: '50%',
                }}
              />
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
