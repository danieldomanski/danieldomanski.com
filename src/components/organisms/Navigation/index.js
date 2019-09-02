import React, { useContext, useEffect, useState } from 'react'
import { withTheme } from 'styled-components'
import PropTypes from 'prop-types'
import Box from '../../atoms/Box'
import { LocalizedLink } from '../../atoms/Link'
import { LocaleContext } from '../../../context/ContentContext'

const getActiveStyle = (active, placement) =>
  placement === 'header'
    ? {
        color: active.color,
        borderBottom: `2px solid ${active.border}`,
        paddingBottom: '4px',
        fontWeight: 600,
      }
    : {
        color: active.color,
        fontWeight: 600,
      }

const headerNavStyles = {
  order: [3, 3, 2, 2, 2, 2],
  ml: [0, 0, 'auto'],
  mr: [0, 0, 8, 8, 8, 32],
  mt: [2, 2, 0],
  textTransform: 'uppercase',
}

const footerNavStyles = {
  flexDirection: 'column',
  py: 4,
}

const headerListStyles = {
  mt: [1, 1, 0],
}

const footerListStyles = {
  flexDirection: ['column', 'row'],
}

const headerItemStyles = {
  mr: 6,
  pb: [2, 2, 0],
  fontSize: ['sm', 'sm'],
}

const footerItemStyles = {
  mr: [0, 6],
  pb: [6, 0, 0],
  fontSize: ['sm', 'base'],
}

const Navigation = ({ theme, variant, placement, content }) => {
  const [locale] = useContext(LocaleContext)
  const { home, projects, about, articles } = content

  const { color, active } = theme.components.navigation[variant]
  const activeStyle = getActiveStyle(active, placement)

  const navStyles = placement === 'header' ? headerNavStyles : footerNavStyles
  const listStyles =
    placement === 'header' ? headerListStyles : footerListStyles
  const itemStyles =
    placement === 'header' ? headerItemStyles : footerItemStyles

  return (
    <Box
      width={[1, 1, 'auto']}
      display="flex"
      alignItems="center"
      {...navStyles}
    >
      <Box
        as="ul"
        display="flex"
        alignItems="center"
        flexWrap="wrap"
        style={{ textTransform: 'uppercase' }}
        {...listStyles}
      >
        <LocalizedLink
          to="/"
          locale={locale}
          fontWeight="medium"
          fontColor={color}
          activeStyle={activeStyle}
          {...itemStyles}
        >
          {home}
        </LocalizedLink>

        <LocalizedLink
          to="/projects"
          locale={locale}
          fontWeight="medium"
          fontColor={color}
          partiallyActive
          activeStyle={activeStyle}
          {...itemStyles}
        >
          {projects}
        </LocalizedLink>

        <LocalizedLink
          display={locale === 'en' ? 'none' : 'block'}
          to="/blog"
          locale={locale}
          fontWeight="medium"
          fontColor={color}
          partiallyActive
          style={{ textTransform: 'uppercase' }}
          activeStyle={activeStyle}
          {...itemStyles}
        >
          {articles}
        </LocalizedLink>

        <LocalizedLink
          to="/about"
          locale={locale}
          fontWeight="medium"
          fontColor={color}
          activeStyle={activeStyle}
          {...itemStyles}
          mr={0}
          pb={placement === 'header' ? 2 : 0}
        >
          {about}
        </LocalizedLink>
      </Box>
    </Box>
  )
}

Navigation.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary']),
  placement: PropTypes.oneOf(['header', 'footer']),
}

Navigation.defaultProps = {
  variant: 'primary',
  placement: 'header',
}

export default withTheme(Navigation)
