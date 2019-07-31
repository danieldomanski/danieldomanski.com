/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space } from 'styled-system'

const CircledAvatar = styled.img`
  ${space};
  min-width: ${props => props.width}px;
  height: ${props => props.height}px;
  max-width: 100%;
  border-radius: 50%;
`

const Avatar = ({ x, y, src, mt, mb, mr, ml }) => (
  <CircledAvatar
    width={x}
    height={y}
    mt={mt}
    mb={mb}
    mr={mr}
    ml={ml}
    src={require(`../../../images/${src}`)}
  />
)

Text.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  src: PropTypes.string.isRequired,
}

Text.defaultProps = {
  x: 100,
  y: 100,
}

export default Avatar
