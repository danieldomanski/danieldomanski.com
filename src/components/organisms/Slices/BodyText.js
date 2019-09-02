import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 0 0.5em;
`

const BodyText = ({ data }) => (
  <Wrapper
    className="body-text"
    dangerouslySetInnerHTML={{ __html: data.primary.text.html }}
  />
)

export default BodyText

BodyText.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
}
