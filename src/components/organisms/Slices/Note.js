import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const Container = styled.blockquote`
  ${tw`flex justify-center rounded`}
  color: rgba(0, 0, 0, 0.7);
  border: 1.5px solid #e6e0a1;
  background: #f6f7d6;
  margin: 0;
  margin-bottom: 2rem;
  padding: 1rem;
  line-height: 1.5;
  font-size: 1.125rem;
`

const Note = ({ data }) => {
  console.log({ data })

  return (
    <Container
      dangerouslySetInnerHTML={{ __html: data.primary.note_text.html }}
    />
  )
}

export default Note

Note.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
}
