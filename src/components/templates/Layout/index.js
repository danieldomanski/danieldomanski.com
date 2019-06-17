import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import tw from 'tailwind.macro'
import Header from '../../organisms/Header'
import Footer from '../../organisms/Footer'
import LocaleProvider from '../../../context/LocaleContext'

const GlobalStyle = createGlobalStyle`
  body, html {
    height: 100vh;
    width: 100vw;
    margin: 0;
    ${tw`font-serif`}
  }

  #___gatsby, #___gatsby > div {
    ${tw`h-auto md:h-full`}
    height: 100%;
  }
`

const ColumnSpacedBetween = styled.div`
  ${tw`h-full relative flex flex-col justify-between  md:overflow-hidden`};
`

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <LocaleProvider>
      <ColumnSpacedBetween>
        <Header />
        {children}
        <Footer />
      </ColumnSpacedBetween>
    </LocaleProvider>
  </>
)

export default Layout
