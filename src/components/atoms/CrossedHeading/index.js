import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import theme from '../../../config/theme'

const fontSize = size => theme.textSizes[size]
const fontWeight = weight => theme.fontWeights[weight]

const HeadingContainer = styled.h1`
  ${tw`relative inline-block my-0 h-auto text-primary-900 px-2 mb-8`};
  font-size: ${props => fontSize(props.size)};
  font-weight: ${props => fontWeight(props.weight)};

  &:after {
    ${tw`absolute inline-block bg-primary-200 pin-l pin-b`};
    border-top: 1px solid #c4c4c4;
    height: 36%;
    content: '';
    width: 100%;
    opacity: 0.5;
  }
`

const CrossedHeadline = ({ children, size, weight }) => (
  <HeadingContainer size={size} weight={weight}>
    {children}
  </HeadingContainer>
)

CrossedHeadline.propTypes = {
  size: PropTypes.oneOf(['lg', 'xl', '2xl', '4xl', '5xl', '6xl']),
  children: PropTypes.node.isRequired,
  weight: PropTypes.oneOf(['medium', 'bold', 'black']),
}

CrossedHeadline.defaultProps = {
  size: '4xl',
  weight: 'bold',
}

export default CrossedHeadline
