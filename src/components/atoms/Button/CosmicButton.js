import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes } from 'styled-components'
import { color, typography, space } from 'styled-system'
import Text from '../Text'
import theme from '../../../config/theme'
import { Stars, generateStars } from '../Cosmos'

const ButtonContainer = styled.button`
  ${typography};
  ${color};
  ${space};

  position: relative;
  width: 200px;
  padding: 1rem;
  overflow: hidden;
  background: 0;
  cursor: pointer;
  outline: 0;
  border: 0;
  text-transform: uppercase;
  border: 2px solid rgba(16, 16, 32, 1);
  transition: box-shadow 0.25s ease;

  @media screen and (min-width: 768px) {
    width: 260px;
  }

  &:hover {
    & > div {
      display: block;
    }

    @media screen and (min-width: 768px) {
      box-shadow: ${theme.shadows.lg};
      &::after {
        width: 100%;
      }

      & span {
        color: white;
      }
    }

    & svg {
      margin-left: 8px;
      fill: white;
    }
    &:focus {
      box-shadow: ${theme.shadows.lg};
    }
  }

  &::after {
    background-color: #101020;
    content: '';
    width: 0;
    height: 100%;
    left: 0;
    top: 0;
    position: absolute;
    transition: width 0.33s cubic-bezier(0.8, 0, 0.16, 1);
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
      fontSize={fontSize}
      color={fontColor}
    >
      {children}
    </Text>
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
