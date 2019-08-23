import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes, withTheme } from 'styled-components'
import tw from 'tailwind.macro'
import { color, typography, space } from 'styled-system'
import Icon from '../Icon'
import Text from '../Text'

const random = max => Math.floor(Math.random() * (max + 1))

const generateStars = n => {
  const values = []

  for (let i = 0; i < n; i++) {
    values.push(`${random(240)}px ${random(100)}px #FFF`)
  }

  return values.join(',')
}

const starsAnimation = keyframes`
0% { transform: translate3d(0, 0px, 0) }
100% {transform: translate3d(0, 100px, 0)}
`

const smStars = generateStars(30)
const mdStars = generateStars(5)

const StarsComponent = (stars, time, animation, width, opacity) => styled.div`
  display: none;
  width: ${width}px;
  height: ${width}px;
  background: transparent;
  box-shadow: ${stars};
  animation: ${animation} ${time}s linear infinite;
  border-radius: 50%;
  opacity: ${opacity};

  &:after {
    content: ' ';
    position: absolute;
    top: -100px;
    left: 0;
    width: ${width}px;
    height: ${width}px;
    background: transparent;
    box-shadow: ${stars};
    border-radius: 50%;
  }
`

const SmallStars = StarsComponent(smStars, 5, starsAnimation, 1, 0.7)
const MediumStars = StarsComponent(mdStars, 5, starsAnimation, 3, 0.7)

const ButtonContainer = styled.button`
  ${tw`relative cursor-pointer p-0 px-4 md:px-6 py-4`};
  height: 64px;
  overflow: hidden;
  outline: 0;
  border: 0;
  background: 0;

  text-transform: uppercase;
  border: 3px solid #25273c;
  color: ${props => props.color};

  &:hover {
    ${tw`shadow-lg`}

    & > div {
      display: block;
    }

    & span {
      color: white !important;
    }

    &::after {
      width: 100%;
    }

    & svg {
      margin-left: 8px;
      fill: white;
    }
  }

  &::after {
    background-color: #25273c;
    content: '';
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    position: absolute;
    transition: width 0.33s cubic-bezier(0.8, 0, 0.16, 1);
    z-index: -1;

    @media screen and (min-width: 768px) {
      width: 0;
      height: 100%;
    }
  }

  ${typography};
  ${color};
  ${space};
`

const Button = ({ children, width, fontSize, color }) => (
  <ButtonContainer color={color} fontSize={fontSize}>
    <Text as="span" fontFamily="sans" fontWeight="bold" fontColor={color}>
      {children}
    </Text>
    <Icon icon="arrow" width={width} ml={2} fill={color} />
    <MediumStars />
    <SmallStars />
  </ButtonContainer>
)

Button.propTypes = {
  children: PropTypes.node.isRequired,
  fontSize: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.number,
}

Button.defaultProps = {
  fontSize: 'base',
  color: '#000',
  width: 32,
}

export default withTheme(Button)
