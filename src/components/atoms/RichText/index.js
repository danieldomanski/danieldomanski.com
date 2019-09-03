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
    ${tw`font-sans text-lg text-primary.7 md:text-secondary.8 leading-loose`}

    a {
      color: #d1e1fd;
      border-bottom: 0px solid transparent;
      transition: padding-bottom 0.25s ease;

      &:hover {
        padding-bottom: 3px;
        border-bottom: 2px solid #d1e1fd;
      }
    }
  }
`

const RichText = ({ content }) =>
  content ? <Container dangerouslySetInnerHTML={{ __html: content }} /> : null

export default RichText
