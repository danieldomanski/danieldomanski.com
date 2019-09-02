import React, { useContext } from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { Location } from '@reach/router'
import styled, { withTheme } from 'styled-components'
import tw from 'tailwind.macro'
import Box from '../Box'
import Text from '../Text'
import { LocaleContext } from '../../../context/ContentContext'

const LocaleSpan = styled.span`
  ${tw`relative text-sm font-sans uppercase cursor-pointer px-2`}


  color: ${props => (props.active ? props.activeColor : props.color)};
  font-weight: ${props => (props.active ? 600 : 500)};
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
    splitted.shift()
  }
  return splitted.join('/')
}

const LocaleSwitcher = ({ theme, variant }) => {
  const { color, activeColor } = theme.components.localeSwitcher[variant]
  const [locale] = useContext(LocaleContext)
  console.log({ locale })

  return (
    <Box display="flex" alignItems="center" order="2">
      <Location>
        {({ location }) => {
          const active = location.pathname.split('/')[1] === 'en' ? 'en' : 'pl'
          const isBlog = location.pathname.split('/').includes('blog')

          return (
            <>
              <Link to={formatPathname(location.pathname, 'pl')}>
                <LocaleSpan
                  color={color}
                  activeColor={activeColor}
                  active={active === 'pl'}
                >
                  Pl
                </LocaleSpan>
              </Link>
              <Text
                fontSize="sm"
                as="span"
                fontColor={isBlog ? '#dadada' : color}
              >
                /
              </Text>
              <Link
                disabled={isBlog}
                style={{
                  pointerEvents: isBlog ? 'none' : 'initial',
                }}
                to={formatPathname(location.pathname, 'en')}
              >
                <LocaleSpan
                  color={isBlog ? '#dadada' : color}
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
