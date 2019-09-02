import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Img from 'gatsby-image/withIEPolyfill'

const BgImage = styled(Img)`
  ${tw``}
  transition: 0.75s ease-in-out;

  max-height: ${props => props.maxHeight}px;
`

const Image = ({ input, type, fit, maxHeight }) => {
  const img =
    type === 'fluid' ? input.childImageSharp.fluid : input.childImageSharp.fixed

  return type === 'fluid' ? (
    <BgImage objectFit={fit} fluid={img} maxHeight={maxHeight} />
  ) : (
    <BgImage objectFit={fit} fixed={img} maxHeight={maxHeight} />
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
