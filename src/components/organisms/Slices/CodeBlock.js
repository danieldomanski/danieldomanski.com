import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const CodeContainer = styled.code`
  ${tw`block text-lg text-primary-200 shadow-lg`}
  margin-bottom: 2rem;
  background: #011627;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  ${props => (props.fullBorder ? 'border-radius: 0.5rem' : '')};

  pre {
    margin: 0;
  }
`

const CodeTitle = styled.div`
  ${tw`text-base text-primary-200 font-bold py-3 px-4`}

  font-family: "Roboto";
  background: #000;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
`

const CodeBlock = ({ data }) => {
  if (data.primary.code_title.text) {
    return (
      <>
        <CodeTitle>{data.primary.code_title.text}</CodeTitle>
        <CodeContainer
          dangerouslySetInnerHTML={{ __html: data.primary.code_block.html }}
        />
      </>
    )
  }

  return (
    <CodeContainer
      fullBorder
      dangerouslySetInnerHTML={{ __html: data.primary.code_block.html }}
    />
  )
}

export default CodeBlock

CodeBlock.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
}
