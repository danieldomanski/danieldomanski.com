import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'
import tw from 'tailwind.macro'
import Helmet from 'react-helmet'
import theme from '../../../config/theme'
import Header from '../../organisms/Header'
import useWindowSize from '../../../hooks/useWindowSize'
import { GlobalStyle } from '../../../utilitity/styles'

const MainContent = styled.main`
  ${tw`flex flex-col relative`}
  min-height: 100vh;
`

const primaryHeaderPages = ['about', 'projects', 'blog']

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
      <Helmet>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Daniel Domański - Full stack web developer</title>
      </Helmet>
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
