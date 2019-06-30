import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import tw from 'tailwind.macro'
import { fontSize, fontWeight, color, spacing } from '../../helpers/styles'

const hiddenOnMobileCss = css`
  ${tw`hidden md:block`};
`

const HeadingContainer = styled.h1`
  ${tw`h-auto text-primary-900 m-0`};
  ${props => (props.hiddenOnMobile ? hiddenOnMobileCss : null)};
  font-size: ${props => fontSize(props.size)};
  font-weight: ${props => fontWeight(props.weight)};
  color: ${props => color(props.fontColor)};
  margin: ${props => spacing(props.mx, props.my)};
`

const Heading = ({
  children,
  size,
  weight,
  fontColor,
  hiddenOnMobile,
  my,
  mx,
}) => (
  <HeadingContainer
    size={size}
    weight={weight}
    fontColor={fontColor}
    hiddenOnMobile={hiddenOnMobile}
    data-testid="headerStyles"
    my={my}
    mx={mx}
  >
    {children}
  </HeadingContainer>
)

Heading.propTypes = {
  size: PropTypes.oneOf(['lg', 'xl', '2xl', '4xl', '5xl', '6xl']),
  fontColor: PropTypes.oneOf(['primary-100', 'primary-500', 'primary-900']),
  children: PropTypes.node.isRequired,
  weight: PropTypes.oneOf(['medium', 'bold', 'black']),
  hiddenOnMobile: PropTypes.bool,
  mx: PropTypes.number,
  my: PropTypes.number,
}

Heading.defaultProps = {
  size: '4xl',
  fontColor: 'primary-100',
  weight: 'medium',
  hiddenOnMobile: false,
  mx: 0,
  my: 0,
}

export default Heading
