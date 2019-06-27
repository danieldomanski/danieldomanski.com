import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { fontSize, lineHeight, color } from '../../helpers/styles'

const ParagraphContainer = styled.p`
  ${tw`my-6 text-primary-900`};
  font-size: ${props => fontSize(props.size)};
  line-height: ${props => lineHeight(props.leading)};
  color: ${props => color(props.fontColor)};
`

const Paragraph = ({ children, size, fontColor, leading }) => (
  <ParagraphContainer size={size} leading={leading} fontColor={fontColor}>
    {children}
  </ParagraphContainer>
)

Paragraph.propTypes = {
  size: PropTypes.oneOf(['sm', 'base', 'lg', 'xl', '2xl']),
  fontColor: PropTypes.oneOf(['primary-100', 'primary-500', 'primary-900']),
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
  fontColor: 'primary-100',
}

export default Paragraph
