import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Img from 'gatsby-image'

const BgImage = styled(Img)`
  ${tw`absolute w-full h-full`}
`

const Image = ({ input }) => (
  <BgImage fluid={input.primary.image.localFile.childImageSharp.fluid} />
)

export default Image

Image.propTypes = {
  input: PropTypes.object.isRequired,
}
