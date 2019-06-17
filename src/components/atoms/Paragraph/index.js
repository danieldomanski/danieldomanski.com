import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from '../../../config/theme'

const fontSize = value => theme.textSizes[value]
const lineHeight = value => theme.leading[value]

const ParagraphContainer = styled.p`
  ${tw`my-6 text-primary-900`};
  font-size: ${props => fontSize(props.size)};
  line-height: ${props => lineHeight(props.leading)};
`

const Paragraph = ({ children, size, leading }) => (
  <ParagraphContainer size={size} leading={leading}>
    {children}
  </ParagraphContainer>
)

Paragraph.propTypes = {
  size: PropTypes.oneOf(['base', 'lg', 'xl', '2xl']),
  leading: PropTypes.oneOf([
    'none',
    'tight',
    'snug',
    'normal',
    'relaxed',
    'loose',
  ]),
  children: PropTypes.node.isRequired,
}

Paragraph.defaultProps = {
  size: 'base',
  leading: 'relaxed',
}

export default Paragraph
