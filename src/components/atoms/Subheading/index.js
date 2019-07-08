import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import tw from 'tailwind.macro'
import { fontSize } from 'styled-system'
import { fontWeight, color } from '../../helpers/styles'

const hiddenOnMobileCss = css`
  ${tw`hidden md:block`};
`

const SubheadingContainer = styled.h1`
  ${tw`h-auto overflow-hidden text-primary-900 font-sans`};
  ${props => (props.hiddenOnMobile ? hiddenOnMobileCss : null)};
  ${fontSize};
  font-weight: ${props => fontWeight(props.weight)};
  color: ${props => color(props.fontColor)};
`

const Subheading = ({ children, size, weight, fontColor, hiddenOnMobile }) => (
  <SubheadingContainer
    fontSize={size}
    weight={weight}
    fontColor={fontColor}
    hiddenOnMobile={hiddenOnMobile}
    data-testid="headerStyles"
  >
    {children}
  </SubheadingContainer>
)

Subheading.propTypes = {
  size: PropTypes.arrayOf(PropTypes.string),
  fontColor: PropTypes.oneOf(['primary-100', 'primary-500', 'primary-900']),
  children: PropTypes.node.isRequired,
  weight: PropTypes.oneOf(['medium', 'bold', 'black']),
  hiddenOnMobile: PropTypes.bool,
}

Subheading.defaultProps = {
  size: 'base',
  fontColor: 'primary-100',
  weight: 'medium',
  hiddenOnMobile: false,
}

export default Subheading
