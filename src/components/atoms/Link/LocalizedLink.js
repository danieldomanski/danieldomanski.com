import React from 'react'
import { Link } from 'gatsby'
import { Location } from '@reach/router'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import PropTypes from 'prop-types'
import { layout, typography, space, color } from 'styled-system'
import locales from '../../../config/locales'
import { formatUrlToLocale } from '../../../utils/format'

const LinkContainer = styled(Link)`
  ${tw`font-sans no-underline cursor-pointer`};
  ${space}
  ${layout}
  ${typography};
  ${color}

`

const LocalizedLink = ({
  children,
  fontSize,
  display,
  fontWeight,
  fontColor,
  width,
  maxWidth,
  my,
  partiallyActive,
  activeStyle,
  hover,
  to,
  ...rest
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
          style={{ transition: '0.3s padding' }}
          hover={hover}
          {...rest}
        >
          {children}
        </LinkContainer>
      )
    }}
  </Location>
)

LocalizedLink.propTypes = {
  fontSize: PropTypes.oneOf(['base', 'lg', 'xl', '2xl', '4xl', '5xl', '6xl']),
  children: PropTypes.node.isRequired,
  fontWeight: PropTypes.oneOf(['base', 'bold', 'black']),
  fontColor: PropTypes.string,
}

LocalizedLink.defaultProps = {
  fontSize: 'base',
  fontWeight: 'base',
  fontColor: 'primary.6',
}

export default LocalizedLink
