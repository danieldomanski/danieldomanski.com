import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from '../../../config/theme'

const Container = styled.blockquote`
  display: flex;
  justify-content: center;
  box-shadow: ${theme.shadows.default};
  font-size: 18px;
  background: #fffae1;
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
