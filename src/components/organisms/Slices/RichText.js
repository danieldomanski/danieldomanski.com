import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const Container = styled.div`
  h1 {
    ${tw`font-sans text-2xl sm:text-3xl md:text-5xl font-bold text-primary.10 md:text-secondary.1 mb-8 md:mb-6 leading-relaxed`}

    em {
      ${tw`font-serif italic`}
    }
  }

  h4 {
    ${tw`font-sans text-lg md:text-xl font-medium text-primary.10 md:text-cosmic.4 uppercase`}
    letter-spacing: 3.5px;
  }
  p {
    max-width: 900px;
    ${tw`inline-block font-sans text-lg font-medium text-primary.7 md:text-secondary.4 leading-loose`}

    a {
      color: #a0b1e5;
      padding-bottom: 6px;
      border-bottom: 2px solid transparent;
      transition: 0.2s ease;
      font-weight: 600;
      &:hover {
        padding-bottom: 2px;
        border-bottom: 2px solid #8e9dcc;
      }
    }
  }
`

const RichText = ({ content }) =>
  content ? <Container dangerouslySetInnerHTML={{ __html: content }} /> : null

export default RichText
