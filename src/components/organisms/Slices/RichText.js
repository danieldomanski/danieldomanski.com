import React from 'react'
import styled from 'styled-components'
import theme from '../../../config/theme'

const Container = styled.div`
  width: 100%;

  h1 {
    font-family: ${theme.fonts.sans.join(', ')};
    font-weight: ${theme.fontWeights.bold};
    margin-bottom: 2rem;
    font-size: ${theme.fontSizes['3xl']};
    color: ${theme.colors.primary[10]};
    letter-spacing: -0.05em;

    @media screen and (min-width: 768px) {
      color: ${theme.colors.secondary[0]};
      font-size: ${theme.fontSizes['5xl']};
    }

    em {
      font-family: ${theme.fonts.serif.join(', ')};
      font-style: italic;
    }
  }

  h4 {
    font-family: ${theme.fonts.sans.join(', ')};
    font-weight: ${theme.fontWeights.medium};
    color: ${theme.colors.primary[10]};
    text-transform: uppercase;

    @media screen and (min-width: 768px) {
      color: ${theme.colors.cosmic[4]};
      font-size: ${theme.fontSizes['xl']};
    }

    letter-spacing: 0.25em;
  }

  p {
    max-width: 900px;
    display: inline-block;
    font-family: ${theme.fonts.sans.join(', ')};
    font-weight: ${theme.fontWeights.medium};
    color: ${theme.colors.primary[10]};
    line-height: ${theme.lineHeights.relaxed};
    letter-spacing: -0.025em;

    @media screen and (min-width: 768px) {
      color: ${theme.colors.secondary[2]};
      font-size: ${theme.fontSizes['lg']};
    }

    a {
      color: #0c0c0c;
      padding-bottom: 6px;
      border-bottom: 2px solid transparent;
      transition: 0.2s ease;
      font-weight: 600;

      &:hover {
        padding-bottom: 2px;
        border-bottom: 2px solid #626b87;
      }

      @media screen and (min-width: 768px) {
        color: #bed6ff;
      }
    }
  }
`

const RichText = ({ content }) =>
  content ? <Container dangerouslySetInnerHTML={{ __html: content }} /> : null

export default RichText
