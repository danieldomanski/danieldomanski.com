import React, { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'
import tw from 'tailwind.macro'
import Box from '../../atoms/Box'
import { LocalizedLink } from '../../atoms/Link'

const List = styled.ul`
  ${tw`flex flex-wrap mt-2 md:mt-0`}
  text-transform: uppercase;
  list-style: none;

  & > li:last-child {
    margin-right: 0;
  }
`

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
  mr: [0, 0, 8, 16, 16, 64],
  mt: [2, 2, 0],
}

const FooterNavStyles = {
  justifyContent: 'center',
}

const Navigation = ({ theme, variant, locale, placement, content }) => {
  const { home, projects, about, articles } = content

  const { color, active } = theme.components.navigation[variant]
  const activeStyle = getActiveStyle(active, placement)
  const styles = placement === 'header' ? headerNavStyles : FooterNavStyles

  return (
    <Box width={[1, 1, 'auto']} display="flex" alignItems="center" {...styles}>
      <List>
        <Box mr={6} pb={[4, 0]}>
          <LocalizedLink
            to="/"
            locale={locale}
            fontWeight="medium"
            fontColor={color}
            fontSize={['sm', 'sm']}
            activeStyle={activeStyle}
          >
            {home}
          </LocalizedLink>
        </Box>
        <Box mr={6} pb={[4, 0]}>
          <LocalizedLink
            to="/projects"
            locale={locale}
            fontWeight="medium"
            fontColor={color}
            partiallyActive
            fontSize={['sm', 'sm']}
            activeStyle={activeStyle}
          >
            {projects}
          </LocalizedLink>
        </Box>
        <Box mr={6} pb={[4, 0]}>
          <LocalizedLink
            to="/blog"
            locale={locale}
            fontWeight="medium"
            fontColor={color}
            partiallyActive
            fontSize={['sm', 'sm']}
            style={{ textTransform: 'uppercase' }}
            activeStyle={activeStyle}
          >
            {articles}
          </LocalizedLink>
        </Box>
        <Box pb={[4, 0]}>
          <LocalizedLink
            to="/about"
            locale={locale}
            fontWeight="medium"
            fontColor={color}
            fontSize={['sm', 'sm']}
            activeStyle={activeStyle}
          >
            {about}
          </LocalizedLink>
        </Box>
      </List>
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
