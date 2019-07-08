import React from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'
import { typography, color, space } from 'styled-system'

const Highlighted = styled.p`
  ${tw`inline self-start no-underline p-0 m-0`};

  ${typography};
  ${color};
  ${space};

  background-image: linear-gradient(${props => `${props.to}, ${props.to}`}),
    linear-gradient(${props => `${props.from}, ${props.from}`});
  background-repeat: no-repeat;
  background-size: 0% 30%, 100% 30%;
  background-position: bottom left, bottom left;

  &:hover {
    background-size: 100% 30%, 100% 30%;
  }

  transition: background-size 0.25s;
`

const TextHighlight = ({
  children,
  fontColor,
  fontSize,
  fontWeight,
  variant,
  theme,
  mx,
  my,
}) => {
  const { from, to } = theme.components.highlights[variant]

  return (
    <Highlighted
      color={fontColor}
      fontWeight={fontWeight}
      fontSize={fontSize}
      mx={mx}
      my={my}
      from={from}
      to={to}
    >
      {children}
    </Highlighted>
  )
}

TextHighlight.propTypes = {
  fontColor: PropTypes.string,
  fontSize: PropTypes.oneOf(['base', 'lg', 'xl', '2xl']),
  fontWeight: PropTypes.oneOf(['base', 'bold', 'black']),
  variant: PropTypes.oneOf(['dark', 'light']),
  children: PropTypes.node.isRequired,
}

TextHighlight.defaultProps = {
  fontColor: 'primary.5',
  variant: 'dark',
  fontSize: 'base',
  fontWeight: 'base',
}

export default withTheme(TextHighlight)
