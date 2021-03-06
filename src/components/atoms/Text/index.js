import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { layout, typography, color, space, flexbox } from 'styled-system'

const TextContainer = styled.p`
  ${layout};
  ${typography};
  ${color};
  ${space};
  ${flexbox};

  height: auto;
  transition: color 0.1s ease-in-out;

  &:hover {
    color: ${props => (props.hover ? props.hover.color : null)};
  }
`

const Text = ({
  children,
  fontFamily,
  fontSize,
  fontWeight,
  fontColor,
  lineHeight,
  letterSpacing,
  maxWidth,
  hover,
  mt,
  mb,
  mr,
  ml,
  ...rest
}) => (
  <TextContainer
    fontSize={fontSize}
    fontFamily={fontFamily}
    fontWeight={fontWeight}
    color={fontColor}
    lineHeight={lineHeight}
    letterSpacing={letterSpacing}
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
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  fontWeight: PropTypes.oneOf(['normal', 'medium', 'bold', 'black']),
  fontFamily: PropTypes.oneOf(['sans', 'serif', 'mono']),
  lineHeight: PropTypes.oneOf(['tight', 'normal', 'relaxed', 'loose']),
  letterSpacing: PropTypes.string,
  fontColor: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  children: PropTypes.node.isRequired,
  mb: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
  mt: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
  mr: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
  ml: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
}

Text.defaultProps = {
  fontFamily: 'sans',
  fontSize: 'base',
  lineHeight: 'normal',
  fontWeight: 'normal',
  fontColor: 'primary.7',
  letterSpacing: '-0.025em',
  mb: 0,
  mt: 0,
  mr: 0,
  ml: 0,
}

export default Text
