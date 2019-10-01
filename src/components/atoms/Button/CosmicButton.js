import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { color, typography, space } from 'styled-system'
import Text from '../Text'
import theme from '../../../config/theme'
import { Stars, generateStars } from '../Cosmos'
import Icon from '../Icon'

const ButtonContainer = styled.button`
  ${typography};
  ${color};
  ${space};

  position: relative;
  padding: 0.75rem;
  overflow: hidden;
  background: 0;
  cursor: pointer;
  outline: 0;
  border: 0;
  text-transform: uppercase;
  transition: 0.4s ease;

  &:hover {
    box-shadow: ${theme.shadows.lg};
    padding: 0.75rem 1.25rem;
    & > div {
      display: block;
    }

    @media screen and (min-width: 768px) {
      &::after {
        width: 100%;
      }

      & span {
        color: white;
      }
    }

    & svg {
      fill: white;
    }
    &:focus {
      box-shadow: ${theme.shadows.lg};
    }
  }

  &::after {
    background-color: #080812;
    content: '';
    width: 0;
    height: 100%;
    left: 0;
    top: 0;
    position: absolute;
    transition: width 0.4s cubic-bezier(0.8, 0, 0.16, 1);
    z-index: -1;
  }
`

const Container = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const smStars = generateStars(20, 320, 100)
const mdStars = generateStars(5, 320, 100)

const SmallStars = Stars(smStars, 5, 1, 1, 100)
const MediumStars = Stars(mdStars, 5, 2, 1, 100)

const Button = ({ children, fontSize, fontColor, ...rest }) => (
  <ButtonContainer {...rest}>
    <Text
      as="span"
      fontFamily="sans"
      fontWeight="bold"
      letterSpacing="0em"
      fontSize={fontSize}
      color={fontColor}
      mr={1}
    >
      {children}
    </Text>
    <Icon icon="arrow" width={19} height={17} fill="#080812" />
    <Container>
      <MediumStars />
      <SmallStars />
    </Container>
  </ButtonContainer>
)

Button.propTypes = {
  children: PropTypes.node.isRequired,
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  fontColor: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
}

Button.defaultProps = {
  fontSize: 'base',
  fontColor: '#000',
}

export default Button
