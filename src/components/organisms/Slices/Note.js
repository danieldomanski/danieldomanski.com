import React from 'react'
import PropTypes from 'prop-types'

const Note = ({ data }) => {
  console.log({ data })

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: data.primary.note_text.html }} />
    </div>
  )
}

export default Note

Note.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
}
