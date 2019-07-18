import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Img from 'gatsby-image'

const BgImage = styled(Img)`
  ${tw``}
  transition: 0.75s ease-in-out;

  @media screen and (max-width: 1200px) {
    min-height: unset;
    max-height: 450px;
  }
`

const Image = ({ input, type, fit }) => {
  const img =
    type === 'fluid' ? input.childImageSharp.fluid : input.childImageSharp.fixed

  return type === 'fluid' ? (
    <BgImage fit={fit} fluid={img} />
  ) : (
    <BgImage fit={fit} fixed={img} />
  )
}

export default Image

Image.propTypes = {
  input: PropTypes.object.isRequired,
  type: PropTypes.oneOf(['fixed', 'fluid']),
  fit: PropTypes.string,
}

Image.defaultProps = {
  fit: 'cover',
  type: 'fluid',
}
