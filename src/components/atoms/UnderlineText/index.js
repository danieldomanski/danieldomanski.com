import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Text from '../Text'

const Line = styled.span`
  ${tw`mt-1 md:mt-2`}
  display: block;
  width: 80px;
  height: 4px;
  background-color: #181818;
`

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
    {...rest}
  >
    {children}
    <Line />
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
  fontSize: ['3xl', '4xl', '5xl'],
  lineHeight: 'normal',
  fontWeight: 'black',
  fontColor: 'primary.11',
  display: 'inline-block',
  my: 8,
  mb: 0,
  mt: 0,
  mr: 0,
  ml: 0,
}

export default UnderlineText
