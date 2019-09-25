import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin: 4rem 0;
  width: 100%;
  height: 400px;
`

export default ({ src, videoTitle }) => (
  <Container>
    <iframe
      src={src}
      title="vid"
      webkitallowfullscreen
      mozallowfullscreen
      allowfullscreen
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      height="100%"
      width="100%"
    />
  </Container>
)
