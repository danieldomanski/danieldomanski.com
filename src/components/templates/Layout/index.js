import React from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import tw from 'tailwind.macro'
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
