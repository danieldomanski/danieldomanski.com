import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: none;
  position: relative;
  padding-bottom: 34.35%; /* 16:9 */
  height: 0;
  margin-top: 6rem;

  @media screen and (min-width: 768px) {
    display: block;
  }

  iframe {
    display: block;
    position: absolute;
    padding: 0;
    border: 0;
    margin: 0;
    top: 0;
    left: 0;
  }
`

const Video = ({ src, ...rest }) => (
  <Container>
    <iframe
      src={src}
      title="vid"
      webkitallowfullscreen
      mozallowfullscreen
      allowFullScreen
      frameBorder="0"
      height="100%"
      width="100%"
    />
  </Container>
)
export default Video
