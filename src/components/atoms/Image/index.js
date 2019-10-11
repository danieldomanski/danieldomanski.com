import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Img from 'gatsby-image/withIEPolyfill'

const BgImage = styled(Img)`
  margin: 0;
  transition: 0.75s ease-in-out;
  width: ${props => (props.width ? props.width : 'initial')};
`

const Image = ({ input, type, fit, ...rest }) => {
  const img =
    type === 'fluid' ? input.childImageSharp.fluid : input.childImageSharp.fixed

  return type === 'fluid' ? (
    <BgImage objectFit={fit} fluid={img} {...rest} />
  ) : (
    <BgImage objectFit={fit} fixed={img} {...rest} />
  )
}

export default Image

Image.propTypes = {
  input: PropTypes.oneOfType([PropTypes.object]).isRequired,
  type: PropTypes.oneOf(['fixed', 'fluid']),
  fit: PropTypes.string,
}

Image.defaultProps = {
  fit: 'cover',
  type: 'fluid',
}
