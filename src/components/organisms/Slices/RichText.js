import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;

  h1 {
    ${tw`font-sans text-3xl sm:text-3xl md:text-5xl font-bold text-primary.10 md:text-secondary.0 mb-8 md:mb-6 `}

    em {
      ${tw`font-serif italic`}
    }
  }

  h4 {
    ${tw`font-sans text-base md:text-xl font-medium text-primary.10 md:text-cosmic.4 uppercase`}
    letter-spacing: 3.5px;
  }

  p {
    max-width: 900px;
    ${tw`inline-block font-sans text-base md:text-lg xl:text-xl font-medium text-primary.10 md:text-secondary.2 leading-relaxed`}
    letter-spacing: -0.02em;
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
