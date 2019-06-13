import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import tw from 'tailwind.macro'
import Header from '../../organisms/Header'
import Footer from '../../organisms/Footer'
import LocaleProvider from '../../context/LocaleContext'
import {
  IndexSlidesWrapper,
  IndexSlidesAbsoluteWrapper,
} from '../../atoms/Wrapper'

const GlobalStyle = createGlobalStyle`
  body, html {
    height: 100vh;
    width: 100vw;
    margin: 0;
  }

  #___gatsby, #___gatsby > div {
    height: 100%;
  }
`

const ColumnSpacedBetween = styled.div`
  ${tw`h-full relative flex flex-col justify-between`};
`

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <LocaleProvider>
      <ColumnSpacedBetween>
        <Header />
        <IndexSlidesWrapper>
          <IndexSlidesAbsoluteWrapper>{children}</IndexSlidesAbsoluteWrapper>
        </IndexSlidesWrapper>

        <Footer />
      </ColumnSpacedBetween>
    </LocaleProvider>
  </>
)

export default Layout
