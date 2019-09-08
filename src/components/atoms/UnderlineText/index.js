import React from 'react'
import PropTypes from 'prop-types'
import Text from '../Text'

const UnderlineText = ({
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
  <Text
    display={display}
    fontSize={['3xl', '4xl', '5xl']}
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
    style={{ letterSpacing: '-0.04em' }}
    {...rest}
  >
    {children}
  </Text>
)

UnderlineText.propTypes = {
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  fontWeight: PropTypes.oneOf(['normal', 'bold', 'black']),
  fontFamily: PropTypes.oneOf(['sans', 'serif', 'mono']),
  lineHeight: PropTypes.oneOf(['tight', 'normal', 'relaxed', 'loose']),
  fontColor: PropTypes.string,
  children: PropTypes.node.isRequired,
  display: PropTypes.string,
  mb: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
  mt: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
  mr: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
  ml: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
  my: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
}

UnderlineText.defaultProps = {
  fontFamily: 'sans',
  fontSize: ['2xl', '3xl', '3xl', '4xl', '4xl'],
  lineHeight: 'normal',
  fontWeight: 'black',
  fontColor: 'primary.11',
  display: 'block',
  mb: 8,
  mt: 8,
  mr: 0,
  ml: 0,
  my: [8, 8, 16],
}

export default UnderlineText
