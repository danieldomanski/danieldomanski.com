import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const Container = styled.blockquote`
  ${tw`flex justify-center rounded text-base md:text-lg`}
  color: rgba(0, 0, 0, 0.7);
  border: 1.5px solid #e6e0a1;
  background: #f6f7d6;
  margin: 0;
  margin-bottom: 2rem;
  padding: 1.5rem;
  line-height: 1.5;
`

const Note = ({ data }) => (
    <Container
      dangerouslySetInnerHTML={{ __html: data.primary.note_text.html }}
    />
  )

export default Note

Note.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
}
