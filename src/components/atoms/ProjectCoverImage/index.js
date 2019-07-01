import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Img from 'gatsby-image'

const BgImage = styled(Img)`
  ${tw`absolute w-full h-full`}
  transition: 0.75s ease-in-out;
  &:hover {
    transform: scale(1.125);
  }
  min-height: 500px;

  @media screen and (max-width: 1200px) {
    min-height: unset;
    max-height: 200px;
  }
`

const Image = ({ input }) => (
  <BgImage fluid={input.primary.image.localFile.childImageSharp.fluid} />
)

export default Image

Image.propTypes = {
  input: PropTypes.object.isRequired,
}
