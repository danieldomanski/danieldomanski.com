import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { layout, typography, color, space } from 'styled-system'

const HeadingContainer = styled.h1`
  ${tw`h-auto`};

  ${layout};
  ${typography};
  ${color};
  ${space};
`

const Heading = ({
  children,
  display,
  fontFamily,
  fontSize,
  fontWeight,
  fontColor,
  lineHeight,
  mt,
  mb,
  mx,
}) => (
  <HeadingContainer
    display={display}
    fontSize={fontSize}
    fontFamily={fontFamily}
    fontWeight={fontWeight}
    color={fontColor}
    lineHeight={lineHeight}
    mt={mt}
    mb={mb}
    mx={mx}
  >
    {children}
  </HeadingContainer>
)

Heading.propTypes = {
  fontSize: PropTypes.arrayOf(PropTypes.string),
  fontWeight: PropTypes.oneOf(['normal', 'bold', 'black']),
  fontFamily: PropTypes.oneOf(['sans', 'serif', 'mono']),
  lineHeight: PropTypes.oneOf(['tight', 'normal', 'relaxed', 'loose']),
  fontColor: PropTypes.string,
  children: PropTypes.node.isRequired,
  display: PropTypes.string,
  mb: PropTypes.number,
  mt: PropTypes.number,
}

Heading.defaultProps = {
  fontFamily: 'serif',
  fontSize: ['4xl'],
  lineHeight: 'normal',
  fontWeight: 'medium',
  fontColor: 'primary.5',
  display: ['inline-block'],
  mb: 0,
  mt: 0,
}

export default Heading
