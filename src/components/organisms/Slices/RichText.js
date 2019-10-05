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

    em {
      font-family: ${theme.fonts.serif.join(', ')};
      font-style: italic;
    }

    @media screen and (min-width: 576px) {
      font-size: ${theme.fontSizes['4xl']};
    }

    @media screen and (min-width: 768px) {
      color: ${theme.colors.secondary[0]};
      font-size: ${theme.fontSizes['6xl']};
    }
  }

  h2 {
    font-family: ${theme.fonts.sans.join(', ')};
    font-weight: ${theme.fontWeights.bold};
    margin-bottom: 2rem;
    font-size: ${theme.fontSizes['3xl']};
    color: ${theme.colors.primary[10]};
    letter-spacing: -0.05em;

    em {
      font-family: ${theme.fonts.serif.join(', ')};
      font-style: italic;
    }

    @media screen and (min-width: 768px) {
      font-size: ${theme.fontSizes['5xl']};
      color: ${theme.colors.secondary[0]};
    }
  }

  h4 {
    font-family: ${theme.fonts.sans.join(', ')};
    font-weight: ${theme.fontWeights.medium};
    color: ${theme.colors.primary[10]};
    text-transform: uppercase;
    letter-spacing: 0.25em;

    @media screen and (min-width: 768px) {
      color: ${theme.colors.secondary[4]};
      font-size: ${theme.fontSizes.xl};
    }
  }

  h5 {
    max-width: 960px;
    font-family: ${theme.fonts.sans.join(', ')};
    font-weight: ${theme.fontWeights.medium};
    font-size: ${theme.fontSizes.lg};
    color: ${theme.colors.primary[10]};
    line-height: ${theme.lineHeights.relaxed};
    letter-spacing: -0.025em;

    @media screen and (min-width: 768px) {
      color: ${theme.colors.secondary[1]};
      font-size: ${theme.fontSizes.xl};
    }

    a {
      font-size: ${theme.fontSizes.lg};

      @media screen and (min-width: 768px) {
        font-size: ${theme.fontSizes.xl};
      }
    }
  }

  p {
    max-width: 1000px;
    display: inline-block;
    font-family: ${theme.fonts.sans.join(', ')};
    font-weight: ${theme.fontWeights.medium};
    color: ${theme.colors.primary[10]};
    line-height: ${theme.lineHeights.relaxed};
    letter-spacing: -0.025em;

    @media screen and (min-width: 768px) {
      color: ${theme.colors.secondary[2]};
      font-size: ${theme.fontSizes.lg};
    }
  }

  a {
    color: #222;
    padding-bottom: 3px;
    border-bottom: 1px solid ${theme.colors.secondary[9]};
    transition: 0.2s ease;
    font-weight: 500;

    &:hover {
      padding-bottom: 6px;
      border-bottom-color: transparent;
    }

    @media screen and (min-width: 768px) {
      color: ${theme.colors.secondary[1]};
      border-bottom: 1.25px solid rgba(206, 214, 255, 0.5);
    }
  }

  ul {
    font-family: ${theme.fonts.sans.join(', ')};
    list-style-type: none;
    margin: 1rem 0;
    font-weight: ${theme.fontWeights.medium};
    line-height: ${theme.lineHeights.relaxed};
    letter-spacing: -0.025em;
  }

  .secondary-text {
    color: ${theme.colors.primary[11]};
    font-size: ${theme.fontSizes.lg};
  }
`

const RichText = ({ content }) =>
  content ? <Container dangerouslySetInnerHTML={{ __html: content }} /> : null

export default RichText
