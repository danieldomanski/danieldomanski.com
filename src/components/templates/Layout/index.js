import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'
import theme from '../../../config/theme'
import Header from '../../organisms/Header'
import useWindowSize from '../../../hooks/useWindowSize'
import SEO from '../../organisms/SEO'
import { GlobalStyle } from '../../../utils/styles'

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 100vh;
`

const primaryHeaderPages = ['about', 'projects', 'blog', 'tags']

const getVariantByLocation = (pathname, name, width) => {
  const path = pathname.replace(/^\/|\/$/g, '').split('/')

  if (name.includes('404')) {
    return width < 768 ? 'secondary' : 'primary'
  }

  return primaryHeaderPages.some(url => path.includes(url)) || width < 768
    ? 'secondary'
    : 'primary'
}

const Layout = ({ children, location, pageContext }) => {
  if (typeof window !== 'undefined') {
    // eslint-disable-next-line global-require
    require('smooth-scroll')('a[href*="#"]')
  }
  const { width } = useWindowSize()
  console.log({ location, pageContext })
  return (
    <>
      <SEO location={location} name={pageContext.name} />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <MainContent>
          <Header
            variant={getVariantByLocation(
              location.pathname,
              pageContext.name,
              width
            )}
          />
          {children}
        </MainContent>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  location: PropTypes.string.isRequired,
}

export default Layout
