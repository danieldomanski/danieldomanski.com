import React from 'react'
import PropTypes from 'prop-types'

const BodyText = ({ data }) => {
  console.log({ data })

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: data.primary.text.html }} />
    </div>
  )
}

export default BodyText

BodyText.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
}
