import React from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'
import tw from 'tailwind.macro'
import { LocalizedLink } from '../../atoms/Link'

const Container = styled.nav`
  ${tw`flex items-center w-full md:ml-auto mt-4`}
  order: 3;

  @media screen and (min-width: 768px) {
    ${tw`w-auto mt-0 ml-auto md:mr-12 xl:mr-16`}
    order: 2;
    width: auto;
    margin-top: 0;
    margin-left: auto;
    margin-right: 3rem;
  }
`

const List = styled.ul`
  ${tw`flex flex-wrap`}

  list-style: none;

  & > li:last-child {
    margin-right: 0;
  }
`

const Item = styled.li`
  ${tw`mr-8 my-2`}
`

const activeStyle = {
  color: '#4583FF',
  borderBottom: '2px solid #4583FF',
  paddingBottom: '6px',
  fontWeight: 600,
}

const Navigation = ({ theme, variant, locale, content }) => {
  const { color } = theme.components.navigation[variant]

  return (
    <Container>
      <List>
        <Item>
          <LocalizedLink
            to="/"
            locale={locale}
            fontWeight="normal"
            fontColor={color}
            activeStyle={activeStyle}
          >
            {content.home}
          </LocalizedLink>
        </Item>
        <Item>
          <LocalizedLink
            to="/projects"
            locale={locale}
            fontWeight="normal"
            fontColor={color}
            partiallyActive
            activeStyle={activeStyle}
          >
            {content.projects}
          </LocalizedLink>
        </Item>
        <Item>
          <LocalizedLink
            to="/blog"
            locale={locale}
            fontWeight="normal"
            fontColor={color}
            partiallyActive
            activeStyle={activeStyle}
          >
            {content.articles}
          </LocalizedLink>
        </Item>
        <Item>
          <LocalizedLink
            to="/about"
            locale={locale}
            fontWeight="normal"
            fontColor={color}
            activeStyle={activeStyle}
          >
            {content.about}
          </LocalizedLink>
        </Item>
      </List>
    </Container>
  )
}

Navigation.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary']),
}

Navigation.defaultProps = {
  variant: 'primary',
}

export default withTheme(Navigation)
