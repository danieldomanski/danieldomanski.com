import React from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import tw from 'tailwind.macro'
import Helmet from 'react-helmet'
import LocaleProvider from '../../../context/LocaleContext'
import ScrollProvider from '../../../context/ScrollContext'
import theme from '../../../config/theme'

const GlobalStyle = createGlobalStyle`
  body, html {
    height: 100%;
    width: 100%;
    margin: 0;
    background-color: #f0f0f0;
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
  }

  .gatsby-image-wrapper {
    height: 100%;
  }

  h1,h2,h3,h4,p,span {
    margin: 0;
    padding: 0;
  }
`

const MainContent = styled.main`
  ${tw`relative`}
`

const Layout = ({ children }) => (
  <>
    <Helmet>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <title>Daniel Domański - Full stack web developer</title>
    </Helmet>
    <GlobalStyle />
    <LocaleProvider>
      <ScrollProvider>
        <ThemeProvider theme={theme}>
          <MainContent>{children}</MainContent>
        </ThemeProvider>
      </ScrollProvider>
    </LocaleProvider>
  </>
)

export default Layout
