import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import tw from 'tailwind.macro'
import Header from '../../organisms/Header'
import Footer from '../../organisms/Footer'
import LocaleProvider from '../../../context/LocaleContext'
import ScrollProvider from '../../../context/ScrollContext'

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
`

const ColumnSpacedBetween = styled.div`
  ${tw`h-full relative flex flex-col justify-between`};
`

const MainContent = styled.main`
  ${tw`relative`}
`

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <LocaleProvider>
      <ScrollProvider>
        <MainContent>{children}</MainContent>
      </ScrollProvider>
    </LocaleProvider>
  </>
)

export default Layout
