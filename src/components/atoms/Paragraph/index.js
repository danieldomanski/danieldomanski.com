import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { fontSize, lineHeight, color, spacing } from '../../helpers/styles'

const Container = styled.div`
  ${tw`font-sans inline-flex`};
  max-width: 1200px;
  margin: ${props => spacing(props.mx, props.my)};
`

const ParagraphContainer = styled.p`
  ${tw`text-primary-900 m-0 p-0`};
  font-size: ${props => fontSize(props.size)};
  line-height: ${props => lineHeight(props.leading)};
  color: ${props => color(props.fontColor)};
  margin-left: ${props => (props.withLine ? '1em' : 0)};
`

const Line = styled.span`
  width: ${props => (props.withLine ? '160px' : 0)};
  height: 2px;
  display: inline-block;
  background-color: black;
  vertical-align: middle;
  margin-top: 0.75em;
`

const Paragraph = ({
  children,
  size,
  fontColor,
  leading,
  withLine,
  my,
  mx,
}) => (
  <Container my={my} mx={mx}>
    <Line withLine={withLine} />
    <ParagraphContainer
      size={size}
      leading={leading}
      fontColor={fontColor}
      withLine={withLine}
    >
      {children}
    </ParagraphContainer>
  </Container>
)

Paragraph.propTypes = {
  size: PropTypes.oneOf(['sm', 'base', 'lg', 'xl', '2xl']),
  fontColor: PropTypes.oneOf(['primary-100', 'primary-500', 'primary-900']),
  withLine: PropTypes.bool,
  leading: PropTypes.oneOf([
    'none',
    'tight',
    'snug',
    'normal',
    'relaxed',
    'loose',
  ]),
  children: PropTypes.node.isRequired,
  mx: PropTypes.number,
  my: PropTypes.number,
}

Paragraph.defaultProps = {
  size: 'base',
  leading: 'relaxed',
  withLine: false,
  fontColor: 'primary-100',
  mx: 0,
  my: 0,
}

export default Paragraph
