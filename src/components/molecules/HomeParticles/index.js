/* eslint-disable react/destructuring-assignment */
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Stars, generateStars, Meteors } from '../../atoms/Cosmos'

const Container = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;

  @media screen and (min-width: 768px) {
    display: block;
  }
`

const smStars = generateStars(700, 2000, 2000)
const mdStars = generateStars(200, 2000, 2000)
const lgStars = generateStars(50, 2000, 2000)

const SmallStars = Stars(smStars, 150, 1, 0.5, 2000)
const MediumStars = Stars(mdStars, 80, 2, 0.6, 2000)
const BigStars = Stars(lgStars, 50, 3, 1, 2000)

const BgParticles = ({ variant }) => (
  <Container>
    <SmallStars />
    <MediumStars />
    <BigStars />
    <Meteors visible={variant === 'hero'} />
  </Container>
  )

BgParticles.propTypes = {
  variant: PropTypes.string,
}

BgParticles.defaultProps = {
  variant: 'hero',
}

export default BgParticles
