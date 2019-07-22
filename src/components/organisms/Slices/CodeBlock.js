import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const CodeContainer = styled.code`
  ${tw`block bg-primary-900 text-lg text-primary-200 rounded-lg shadow-lg my-4`}
`

const CodeBlock = ({ data }) => {
  console.log({ data })

  return (
    <CodeContainer
      dangerouslySetInnerHTML={{ __html: data.primary.code_block.html }}
    />
  )
}

export default CodeBlock

CodeBlock.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
}
