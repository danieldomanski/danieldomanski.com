import React from 'react'
import PropTypes from 'prop-types'

const CodeBlock = ({ data }) => {
  console.log({ data })

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: data.primary.code_block.html }} />
    </div>
  )
}

export default CodeBlock

CodeBlock.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
}
