import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'
import tw from 'tailwind.macro'
import Helmet from 'react-helmet'
import theme from '../../../config/theme'
import Header from '../../organisms/Header'
import useWindowSize from '../../../hooks/useWindowSize'
import SEO from '../../organisms/SEO'
import { GlobalStyle } from '../../../utils/styles'

const MainContent = styled.main`
  ${tw`flex flex-col relative`}
  min-height: 100vh;
`

const primaryHeaderPages = ['about', 'projects', 'blog', 'tags']

const getVariantByLocation = (pathname, width) => {
  const path = pathname.replace(/^\/|\/$/g, '').split('/')

  return primaryHeaderPages.some(url => path.includes(url)) || width < 768
    ? 'secondary'
    : 'primary'
}

const Layout = ({ children, location }) => {
  const { width } = useWindowSize()

  return (
    <>
      <SEO pathname={location.pathname} />
      <GlobalStyle />

      <ThemeProvider theme={theme}>
        <MainContent>
          <Header variant={getVariantByLocation(location.pathname, width)} />
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
