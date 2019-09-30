import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Wrapper = styled.div`
  margin-bottom: 2rem;
`

const Image = ({ data }) => (
  <Wrapper>
    <Img fluid={data.primary.image.localFile.childImageSharp.fluid} />
  </Wrapper>
)

export default Image

Image.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
}
