import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Img from 'gatsby-image'

const BgImage = styled(Img)`
  ${tw``}
  transition: 0.75s ease-in-out;

  min-height: 500px;

  @media screen and (max-width: 1200px) {
    min-height: unset;
    max-height: 450px;
  }

  img {
    object-fit: ${props =>
      props.fit === 'cover' ? 'cover' : 'contain'} !important;
  }
`

const Image = ({ input, fit }) => {
  console.log({ input })
  return <BgImage fit={fit} fluid={input.childImageSharp.fluid} />
}

export default Image

Image.propTypes = {
  input: PropTypes.object.isRequired,
  fit: PropTypes.string,
}

Image.defaultProps = {
  fit: 'cover',
}
