import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import theme from '../../../config/theme'

const fontSize = size => theme.textSizes[size]
const fontWeight = weight => theme.fontWeights[weight]

const HeadingContainer = styled.h1`
  ${tw`mx-4 my-0 h-auto overflow-hidden text-primary-900`};
  font-size: ${props => fontSize(props.size)};
  font-weight: ${props => fontWeight(props.weight)};
`

const Heading = ({ children, size, weight }) => (
  <HeadingContainer size={size} weight={weight} data-testid="headerStyles">
    {children}
  </HeadingContainer>
)

Heading.propTypes = {
  size: PropTypes.oneOf(['xl', '2xl', '4xl', '6xl']),
  children: PropTypes.node.isRequired,
  weight: PropTypes.oneOf(['medium', 'bold', 'black']),
}

Heading.defaultProps = {
  size: '4xl',
  weight: 'medium',
}

export default Heading
