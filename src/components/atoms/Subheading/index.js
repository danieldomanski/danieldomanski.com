import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import tw from 'tailwind.macro'
import theme from '../../../config/theme'

const fontSize = size => theme.textSizes[size]
const fontWeight = weight => theme.fontWeights[weight]

const hiddenOnMobileCss = css`
  ${tw`hidden md:block`};
`

const SubheadingContainer = styled.h1`
  ${tw`my-0 h-auto overflow-hidden text-primary-900`};
  ${props => (props.hiddenOnMobile ? hiddenOnMobileCss : null)};
  font-size: ${props => fontSize(props.size)};
  font-weight: ${props => fontWeight(props.weight)};
`

const Subheading = ({ children, size, weight, hiddenOnMobile }) => (
  <SubheadingContainer
    size={size}
    weight={weight}
    hiddenOnMobile={hiddenOnMobile}
    data-testid="headerStyles"
  >
    {children}
  </SubheadingContainer>
)

Subheading.propTypes = {
  size: PropTypes.oneOf(['lg', 'xl', '2xl', '4xl', '5xl', '6xl']),
  children: PropTypes.node.isRequired,
  weight: PropTypes.oneOf(['medium', 'bold', 'black']),
  hiddenOnMobile: PropTypes.bool,
}

Subheading.defaultProps = {
  size: 'xl',
  weight: 'medium',
  hiddenOnMobile: false,
}

export default Subheading
