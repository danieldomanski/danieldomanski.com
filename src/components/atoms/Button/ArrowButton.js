import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes, withTheme } from 'styled-components'
import tw from 'tailwind.macro'
import { color, typography, space } from 'styled-system'
import Text from '../Text'

const random = max => Math.floor(Math.random() * (max + 1))

const generateStars = n => {
  const values = []

  for (let i = 0; i < n; i += 1) {
    values.push(`${random(320)}px ${random(100)}px #FFF`)
  }

  return values.join(',')
}

const starsAnimation = keyframes`
0% { transform: translate3d(0, 0px, 0) }
100% {transform: translate3d(0, -100px, 0)}
`

const smStars = generateStars(15)
const mdStars = generateStars(3)

const StarsComponent = (stars, time, animation, width, opacity) => styled.div`
  display: none;
  width: ${width}px;
  height: ${width}px;
  background: transparent;
  box-shadow: ${stars};
  animation: ${animation} ${time}s linear infinite both;
  border-radius: 50%;
  opacity: ${opacity};

  &:after {
    content: '';
    position: absolute;
    top: 100px;
    left: -0px;
    width: ${width}px;
    height: ${width}px;
    background: transparent;
    box-shadow: ${stars};
    border-radius: 50%;
  }
`

const SmallStars = StarsComponent(smStars, 5, starsAnimation, 1, 0.8)
const MediumStars = StarsComponent(mdStars, 5, starsAnimation, 3, 0.7)

const ButtonContainer = styled.button`
  ${tw`relative cursor-pointer p-0 px-4 py-4`};

  width: 200px;

  @media screen and (min-width: 768px) {
    width: 260px;
  }

  overflow: hidden;
  outline: 0;
  border: 0;
  background: 0;

  text-transform: uppercase;
  border: 2px solid rgba(16, 16, 32, 1);

  &:hover {
    & > div > div {
      display: block;
    }

    @media screen and (min-width: 768px) {
      ${tw`shadow-lg`}
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
      ${tw`shadow-lg`}
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

  ${typography};
  ${color};
  ${space};
`

const Container = styled.div`
  ${tw`hidden md:block absolute pin-l pin-t`}

  width: 100%;
  height: 100%;
`

const Button = ({ children, fontSize, fontColor, ...rest }) => (
  <ButtonContainer {...rest}>
    <Text
      as="span"
      fontFamily="sans"
      fontWeight="semibold"
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
  fontSize: PropTypes.string,
  fontColor: PropTypes.string,
}

Button.defaultProps = {
  fontSize: 'base',
  fontColor: '#000',
}

export default withTheme(Button)
