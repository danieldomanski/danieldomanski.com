import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { withTheme } from 'styled-components'
import Box from '../../atoms/Box'
import { LocalizedLink } from '../../atoms/Link'
import { LocaleContext } from '../../../context/ContentContext'

const getActiveStyle = (active, placement) =>
  placement === 'header'
    ? {
        color: active.color,
        fontWeight: 600,
      }
    : {
        color: active.color,
        fontWeight: 600,
      }

const headerNavStyles = {
  order: [3, 3, 2, 2, 2, 2],
  ml: [0, 0, 'auto'],
  mr: [0, 0, 'auto', 16, 20],
  mt: [3, 3, 0],
  textTransform: 'uppercase',
}

const footerNavStyles = {
  flexDirection: 'column',
  py: 2,
}

const headerListStyles = {
  mt: [1, 1, 0],
}

const footerListStyles = {
  flexDirection: ['column', 'row'],
}

const headerItemStyles = {
  pr: 8,
  fontSize: ['sm', 'sm'],
}

const footerItemStyles = {
  mr: [0, 8],
  pb: [6, 0, 0],
  fontSize: ['sm', 'sm'],
}

const NavItem = ({ children, to, color, itemStyle, activeStyle, ...rest }) => (
  <li>
    <LocalizedLink
      to={to}
      fontColor={color}
      fontSize={['sm', 'sm']}
      fontWeight="medium"
      activeStyle={activeStyle}
      hover={{ color: itemStyle.hoverColor }}
      {...itemStyle}
      {...rest}
    >
      {children}
    </LocalizedLink>
  </li>
)

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
      as="nav"
      width={[1, 1, 'auto']}
      display="flex"
      alignItems="center"
      textAlign="center"
      {...navStyles}
    >
      <Box
        as="ul"
        display="flex"
        alignContent="flex-start"
        style={{ textTransform: 'uppercase', listStyleType: 'none' }}
        {...listStyles}
      >
        <NavItem
          to="/"
          color={color}
          activeStyle={activeStyle}
          itemStyle={itemStyles}
        >
          {home}
        </NavItem>
        <NavItem
          partiallyActive
          to="/projects"
          color={color}
          activeStyle={activeStyle}
          itemStyle={itemStyles}
        >
          {projects}
        </NavItem>
        <NavItem
          display={locale === 'en' ? 'none' : 'inline-block'}
          partiallyActive
          to="/blog"
          color={color}
          activeStyle={activeStyle}
          itemStyle={itemStyles}
        >
          {articles}
        </NavItem>
        <NavItem
          partiallyActive
          to="/about"
          color={color}
          activeStyle={activeStyle}
          itemStyle={itemStyles}
          mr={placement === 'header' ? 'inherit' : 0}
        >
          {about}
        </NavItem>
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
