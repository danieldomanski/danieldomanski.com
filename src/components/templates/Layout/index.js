import React from 'react'
import PropTypes from 'prop-types'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import tw from 'tailwind.macro'
import Helmet from 'react-helmet'
import ScrollProvider from '../../../context/ScrollContext'
import theme from '../../../config/theme'
import Header from '../../organisms/Header'
import useWindowSize from '../../../hooks/useWindowSize'

const GlobalStyle = createGlobalStyle`
  html {
    overflow-y: scroll;
  }
  
  body, html {
    height: 100%;
    width: 100%;
    margin: 0;
    background-color: #fafafa;
    ${tw`font-serif`}
  }

  #___gatsby, #___gatsby > div {
    ${tw`h-full`}
  }

  ul, li {
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
    user-select: text;
  }

  .gatsby-image-wrapper {
    height: 100%;
  }

  h1,h2,h3,h4,p,span {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none !important;
  }

`

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

      <ScrollProvider throttle={0}>
        <ThemeProvider theme={theme}>
          <MainContent>
            <Header variant={getVariantByLocation(location.pathname, width)} />
            {children}
          </MainContent>
        </ThemeProvider>
      </ScrollProvider>
    </>
  )
}

Layout.propTypes = {
  location: PropTypes.string.isRequired,
}

export default Layout
