import React from 'react'
import { Link } from 'gatsby'
import { Location } from '@reach/router'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import PropTypes from 'prop-types'
import { layout, typography, space, color } from 'styled-system'
import locales from '../../../config/locales'
import { formatUrlToLocale } from '../../../utilitity/format'

const LinkContainer = styled(Link)`
  ${tw`font-sans no-underline cursor-pointer`};
  ${space}
  ${layout}
  ${typography};
  ${color};
`

const RegularLink = ({
  children,
  locale,
  fontSize,
  display,
  fontWeight,
  fontColor,
  width,
  maxWidth,
  my,
  partiallyActive,
  activeStyle,
  to,
}) => (
  <Location>
    {({ location }) => {
      const isIndex = to === '/'
      const locale = formatUrlToLocale(location.pathname)

      const path = locales[locale].default
        ? to
        : `${locales[locale].path}${isIndex && to !== '/' ? '' : to}`

      return (
        <LinkContainer
          display={display}
          fontSize={fontSize}
          fontWeight={fontWeight}
          color={fontColor}
          width={width}
          maxWidth={maxWidth}
          my={my}
          activeStyle={activeStyle}
          partiallyActive={partiallyActive}
          to={path}
        >
          {children}
        </LinkContainer>
      )
    }}
  </Location>
)

RegularLink.propTypes = {
  size: PropTypes.oneOf(['base', 'lg', 'xl', '2xl', '4xl', '5xl', '6xl']),
  children: PropTypes.node.isRequired,
  weight: PropTypes.oneOf(['base', 'bold', 'black']),
  color: PropTypes.string,
}

RegularLink.defaultProps = {
  size: 'base',
  weight: 'base',
  color: 'primary.6',
}

export default RegularLink
