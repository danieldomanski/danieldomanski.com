import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { withTheme } from 'styled-components'
import Box from '../../atoms/Box'
import LocalizedLink from '../../atoms/LocalizedLink'
import { LocaleContext } from '../../../context/ContentContext'

const NavItem = ({
  children,
  to,
  color,
  itemStyle,
  activeStyle,
  display,
  ...rest
}) => (
  <Box display={display} as="li" pb={itemStyle.mb} key={to}>
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
  </Box>
)

const Navigation = ({ theme, variant, placement, content }) => {
  const [locale] = useContext(LocaleContext)
  const { home, projects, about, articles } = content
  const { color, active } = theme.components.navigation[variant]
  const {
    containerStyles,
    listStyles,
    itemStyles,
  } = theme.components.navigation[placement]
  const activeStyle = { color: active.color, fontWeight: 600 }

  return (
    <Box
      as="nav"
      width={[1, 1, 'auto']}
      display="flex"
      alignItems="center"
      textAlign="center"
      data-testid="nav"
      {...containerStyles}
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
  variant: PropTypes.oneOfType(['primary', 'secondary']),
  placement: PropTypes.oneOfType(['header', 'footer']),
}

Navigation.defaultProps = {
  variant: 'primary',
  placement: 'header',
}

export default withTheme(Navigation)
