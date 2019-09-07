import { createGlobalStyle } from 'styled-components'
import theme from '../config/theme'

export const GlobalStyle = createGlobalStyle`
  html {
    overflow-y: scroll;
  }
  
  body, html {
    height: 100%;
    width: 100%;
    margin: 0;
    background-color: #f4f4f4;
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
export const getComponentTheme = (component, type) =>
  theme.components[component][type]

export const fontSize = value => theme.fontSizes[value]
export const fontWeight = value => theme.fontWeights[value]
export const lineHeight = value => theme.leading[value]
export const color = value => theme.colors[value]
export const spacing = (x, y) => `${theme.spacing[y]} ${theme.spacing[x]}`
