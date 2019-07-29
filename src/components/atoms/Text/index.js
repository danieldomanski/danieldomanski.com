import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { layout, typography, color, space } from 'styled-system'

const TextContainer = styled.p`
  ${tw`h-auto`};

  ${layout};
  ${typography};
  ${color};
  ${space};

  &:hover {
    color: ${props => (props.hover ? props.hover.color : null)};
  }

  transition: color 0.1s ease-in-out;
`

const Text = ({
  children,
  display,
  fontFamily,
  fontSize,
  fontWeight,
  fontColor,
  lineHeight,
  maxWidth,
  hover,
  mt,
  mb,
  mr,
  ml,
  ...rest
}) => (
  <TextContainer
    display={display}
    fontSize={fontSize}
    fontFamily={fontFamily}
    fontWeight={fontWeight}
    color={fontColor}
    lineHeight={lineHeight}
    maxWidth={maxWidth}
    hover={hover}
    mt={mt}
    mb={mb}
    mr={mr}
    ml={ml}
    {...rest}
  >
    {children}
  </TextContainer>
)

Text.propTypes = {
  fontSize: PropTypes.arrayOf(PropTypes.string),
  fontWeight: PropTypes.oneOf(['normal', 'bold', 'black']),
  fontFamily: PropTypes.oneOf(['sans', 'serif', 'mono']),
  lineHeight: PropTypes.oneOf(['tight', 'normal', 'relaxed', 'loose']),
  fontColor: PropTypes.string,
  children: PropTypes.node.isRequired,
  display: PropTypes.string,
  mb: PropTypes.number,
  mt: PropTypes.number,
  mr: PropTypes.number,
  ml: PropTypes.number,
}

Text.defaultProps = {
  fontFamily: 'serif',
  fontSize: ['4xl'],
  lineHeight: 'normal',
  fontWeight: 'normal',
  fontColor: 'primary.5',
  display: ['inline-block'],
  mb: 0,
  mt: 0,
  mr: 0,
  ml: 0,
}

export default Text
