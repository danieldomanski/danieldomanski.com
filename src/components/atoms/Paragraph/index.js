import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { typography, color, space } from 'styled-system'

const Container = styled.div`
  ${tw`font-sans inline-flex`};
  max-width: 1200px;
  ${space};
`

const ParagraphContainer = styled.p`
  ${tw`text-primary-900 m-0 p-0`};
  ${typography};
  ${color};
  margin-left: ${props => (props.withLine ? '1em' : 0)};
  font-style: ${props => (props.italic ? 'italic' : 'normal')};
`

const Line = styled.span`
  width: ${props => (props.withLine ? '100%' : 0)};
  max-width: 80px;
  height: 2px;
  display: inline-block;
  background-color: black;
  vertical-align: middle;
  margin-top: 0.75em;
`

const Paragraph = ({
  children,
  fontSize,
  fontColor,
  italic,
  lineHeight,
  withLine,
  my,
  mx,
}) => (
  <Container my={my} mx={mx}>
    <Line withLine={withLine} />
    <ParagraphContainer
      fontSize={fontSize}
      lineHeight={lineHeight}
      color={fontColor}
      withLine={withLine}
      italic={italic}
    >
      {children}
    </ParagraphContainer>
  </Container>
)

Paragraph.propTypes = {
  fontSize: PropTypes.oneOf(['sm', 'base', 'lg', 'xl', '2xl']),
  fontColor: PropTypes.oneOf(['primary-100', 'primary-500', 'primary-900']),
  withLine: PropTypes.bool,
  lineHeight: PropTypes.oneOf([
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
  fontSize: 'base',
  lineHeight: 'relaxed',
  withLine: false,
  fontColor: 'primary.9',
  mx: 0,
  my: 0,
}

export default Paragraph
