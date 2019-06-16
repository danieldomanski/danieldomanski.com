import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const Wrapper = styled.svg`
  ${tw``};
  stroke: currentColor;
  color: ${props => props.stroke};
  width: ${props => props.width};
  height: ${props => props.width};
  fill: ${props => props.fill};
  left: ${props => props.left};
  top: ${props => props.top};
  vertical-align: middle;
`

const icons = {
  github: {
    shape: (
      <path d="M9.52194 0C4.73864 0 0.86438 4.02975 0.86438 9C0.86438 12.9773 3.34477 16.35 6.78398 17.5387C7.21686 17.6235 7.37558 17.3452 7.37558 17.106C7.37558 16.8922 7.36837 16.326 7.36476 15.576C4.95652 16.119 4.44861 14.3685 4.44861 14.3685C4.05469 13.3297 3.48546 13.0522 3.48546 13.0522C2.70122 12.4943 3.54606 12.5055 3.54606 12.5055C4.41542 12.5685 4.87211 13.4325 4.87211 13.4325C5.64407 14.8088 6.8987 14.4112 7.39362 14.181C7.47154 13.599 7.69447 13.2022 7.94193 12.9772C6.01923 12.7522 3.99842 11.9783 3.99842 8.52975C3.99842 7.54725 4.3339 6.74475 4.88942 6.11475C4.79202 5.8875 4.49983 4.9725 4.96518 3.73275C4.96518 3.73275 5.69025 3.49125 7.346 4.65525C8.03861 4.455 8.7745 4.356 9.51039 4.3515C10.2463 4.356 10.9822 4.455 11.6748 4.65525C13.3197 3.49125 14.0448 3.73275 14.0448 3.73275C14.5101 4.9725 14.2179 5.8875 14.1314 6.11475C14.6833 6.74475 15.0188 7.54725 15.0188 8.52975C15.0188 11.9873 12.9951 12.7485 11.0688 12.9697C11.3718 13.2397 11.6531 13.7917 11.6531 14.6347C11.6531 15.8392 11.6423 16.8067 11.6423 17.0993C11.6423 17.3355 11.7938 17.6167 12.2375 17.5267C15.7013 16.3463 18.1795 12.9713 18.1795 9C18.1795 4.02975 14.3031 0 9.52194 0Z" />
    ),
    viewBox: '0 0 18 18',
  },
  linkedin: {
    shape: (
      <path d="M15.4366 15.339H12.8725V11.1623C12.8725 10.1663 12.853 8.8845 11.5363 8.8845C10.1995 8.8845 9.99529 9.96825 9.99529 11.0887V15.339H7.43122V6.75H9.89429V7.92075H9.92748C10.2716 7.24575 11.1085 6.53325 12.3588 6.53325C14.9568 6.53325 15.4373 8.31075 15.4373 10.6245V15.339H15.4366ZM4.53526 5.57475C3.70991 5.57475 3.04688 4.88025 3.04688 4.026C3.04688 3.1725 3.71063 2.47875 4.53526 2.47875C5.35773 2.47875 6.02436 3.1725 6.02436 4.026C6.02436 4.88025 5.35701 5.57475 4.53526 5.57475ZM5.82091 15.339H3.24962V6.75H5.82091V15.339ZM16.7193 0H1.96253C1.25621 0 0.684814 0.5805 0.684814 1.29675V16.7033C0.684814 17.4202 1.25621 18 1.96253 18H16.7172C17.4228 18 17.9999 17.4202 17.9999 16.7033V1.29675C17.9999 0.5805 17.4228 0 16.7172 0H16.7193Z" />
    ),
    viewBox: '0 0 18 18',
  },
}

const Icon = ({ icon, ...props }) => (
  <Wrapper {...props}>{icons[icon].shape}</Wrapper>
)

Icon.propTypes = {
  stroke: PropTypes.string,
  fill: PropTypes.string,
  width: PropTypes.string,
  icon: PropTypes.oneOf(Object.keys(icons)).isRequired,
}

Icon.defaultProps = {
  stroke: 'transparent',
  width: '24px',
  fill: '#353535',
}

export default Icon
