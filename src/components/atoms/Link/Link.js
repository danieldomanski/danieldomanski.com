import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import PropTypes from 'prop-types'
import theme from '../../../config/theme'

const fontSize = size => theme.textSizes[size]
const fontWeight = weight => theme.fontWeights[weight]

const LinkContainer = styled(Link)`
  ${tw`font-sans no-underline text-primary-100`};

  font-size: ${props => fontSize(props.size)};
  font-weight: ${props => fontWeight(props.weight)};
`

const RegularLink = ({ children, size, weight }) => (
  <LinkContainer size={size} weight={weight}>
    {children}
  </LinkContainer>
)

RegularLink.propTypes = {
  size: PropTypes.oneOf(['base', 'lg', 'xl', '2xl', '4xl', '5xl', '6xl']),
  children: PropTypes.node.isRequired,
  weight: PropTypes.oneOf(['medium', 'bold', 'black']),
}

RegularLink.defaultProps = {
  size: 'base',
  weight: 'medium',
  hiddenOnMobile: false,
}

export default RegularLink
