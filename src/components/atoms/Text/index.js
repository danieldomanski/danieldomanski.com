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
    data-testid="headerStyles"
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
  fontColor: PropTypes.string,
  children: PropTypes.node.isRequired,
  display: PropTypes.string,
  mx: PropTypes.number,
  mb: PropTypes.number,
  mt: PropTypes.number,
}

Heading.defaultProps = {
  fontFamily: 'serif',
  fontSize: ['4xl'],
  fontWeight: 'medium',
  fontColor: 'primary.5',
  display: ['inline-block'],
  mx: 0,
  my: 0,
}

export default Heading
