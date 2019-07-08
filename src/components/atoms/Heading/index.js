import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import tw from 'tailwind.macro'
import { typography, color, space } from 'styled-system'

const hiddenOnMobileCss = css`
  ${tw`hidden md:block`};
`

const HeadingContainer = styled.h1`
  ${tw`h-auto m-0`};
  ${typography};
  ${color};
  ${space};
  ${props => (props.hiddenOnMobile ? hiddenOnMobileCss : null)};
`

const Heading = ({
  children,
  fontSize,
  fontWeight,
  fontColor,
  hiddenOnMobile,
  my,
  mx,
}) => (
  <HeadingContainer
    fontSize={fontSize}
    fontWeight={fontWeight}
    color={fontColor}
    hiddenOnMobile={hiddenOnMobile}
    data-testid="headerStyles"
    my={my}
    mx={mx}
  >
    {children}
  </HeadingContainer>
)

Heading.propTypes = {
  fontSize: PropTypes.arrayOf(PropTypes.string),
  fontWeight: PropTypes.oneOf(['normal', 'bold', 'black']),
  fontColor: PropTypes.string,
  children: PropTypes.node.isRequired,
  hiddenOnMobile: PropTypes.bool,
  mx: PropTypes.number,
  my: PropTypes.number,
}

Heading.defaultProps = {
  fontSize: ['4xl'],
  fontWeight: 'medium',
  fontColor: 'primary.5',
  hiddenOnMobile: false,
  mx: 0,
  my: 0,
}

export default Heading
