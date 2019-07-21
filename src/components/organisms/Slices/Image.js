import React from 'react'
import PropTypes from 'prop-types'

const Image = ({ data }) => {
  console.log({ data })

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: data.primary.text.html }} />
    </div>
  )
}

export default Image

Image.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
}
