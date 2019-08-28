import React, { useContext, useEffect, useState } from 'react'
import { withTheme } from 'styled-components'
import PropTypes from 'prop-types'
import Box from '../../atoms/Box'
import { LocalizedLink } from '../../atoms/Link'

const getActiveStyle = (active, placement) =>
  placement === 'header'
    ? {
        color: active.color,
        borderBottom: `3px solid ${active.border}`,
        paddingBottom: '4px',
      }
    : {
        color: active.color,
      }

const headerNavStyles = {
  order: [3, 3, 2, 2, 2, 2],
  ml: [0, 0, 'auto'],
  mr: [0, 0, 8, 16, 16, 64],
  mt: [2, 2, 0],
  textTransform: 'uppercase',
}

const footerNavStyles = {
  flexDirection: 'column',
}

const headerListStyles = {
  mt: [2, 2, 0],
}

const footerListStyles = {
  flexDirection: ['column', 'row'],
}

const headerItemStyles = {
  mr: 6,
  pb: [3, 3, 0],
}

const footerItemStyles = {
  mr: [0, 0, 6],
  pb: [6, 0, 0],
}

const Navigation = ({ theme, variant, locale, placement, content }) => {
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
        <Box {...itemStyles}>
          <LocalizedLink
            to="/"
            locale={locale}
            fontWeight="bold"
            fontColor={color}
            fontSize={['sm', 'sm']}
            activeStyle={activeStyle}
          >
            {home}
          </LocalizedLink>
        </Box>
        <Box {...itemStyles}>
          <LocalizedLink
            to="/projects"
            locale={locale}
            fontWeight="bold"
            fontColor={color}
            partiallyActive
            fontSize={['sm', 'sm']}
            activeStyle={activeStyle}
          >
            {projects}
          </LocalizedLink>
        </Box>
        <Box {...itemStyles}>
          <LocalizedLink
            to="/blog"
            locale={locale}
            fontWeight="bold"
            fontColor={color}
            partiallyActive
            fontSize={['sm', 'sm']}
            style={{ textTransform: 'uppercase' }}
            activeStyle={activeStyle}
          >
            {articles}
          </LocalizedLink>
        </Box>
        <Box {...itemStyles} pb={[4, 4, 0]}>
          <LocalizedLink
            to="/about"
            locale={locale}
            fontWeight="bold"
            fontColor={color}
            fontSize={['sm', 'sm']}
            activeStyle={activeStyle}
          >
            {about}
          </LocalizedLink>
        </Box>
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
