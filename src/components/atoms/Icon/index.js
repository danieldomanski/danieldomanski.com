import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { layout, space } from 'styled-system'

const Wrapper = styled.svg`
  ${layout};
  ${space};

  stroke: currentColor;
  color: ${props => props.stroke};
  fill: ${props => props.fill};
  left: ${props => props.left};
  top: ${props => props.top};

  vertical-align: middle;
  transition: fill 0.1s ease-in-out;

  &:hover {
    fill: ${props => (props.hover ? props.hover.color : null)};
    transform: ${props => (props.hover ? props.hover.transform : null)};
  }
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
  arrow: {
    shape: (
      <path d="M24.3536 4.35355C24.5488 4.15829 24.5488 3.84171 24.3536 3.64645L21.1716 0.464466C20.9763 0.269204 20.6597 0.269204 20.4645 0.464466C20.2692 0.659728 20.2692 0.976311 20.4645 1.17157L23.2929 4L20.4645 6.82843C20.2692 7.02369 20.2692 7.34027 20.4645 7.53553C20.6597 7.7308 20.9763 7.7308 21.1716 7.53553L24.3536 4.35355ZM0 4.5H24V3.5H0V4.5Z" />
    ),
    viewBox: '0 0 25 8',
  },
  caret: {
    shape: (
      <path d="M8.20711 8.70711C8.59763 8.31658 8.59763 7.68342 8.20711 7.29289L1.84315 0.928932C1.45262 0.538408 0.819457 0.538408 0.428932 0.928932C0.0384078 1.31946 0.0384078 1.95262 0.428932 2.34315L6.08579 8L0.428932 13.6569C0.0384078 14.0474 0.0384078 14.6805 0.428932 15.0711C0.819457 15.4616 1.45262 15.4616 1.84315 15.0711L8.20711 8.70711ZM7 9H7.5V7H7V9Z" />
    ),
    viewBox: '0 0 9 16',
  },
  react: {
    shape: (
      <>
        <g clipPath="url(#clip0)">
          <path
            d="M23.95 19.722C23.3894 19.722 22.8342 19.8327 22.3163 20.0477C21.7983 20.2627 21.3277 20.5778 20.9313 20.975C20.5349 21.3723 20.2204 21.8439 20.0059 22.3629C19.7913 22.8819 19.6809 23.4382 19.6809 24C19.6809 24.5618 19.7913 25.1181 20.0059 25.6372C20.2204 26.1562 20.5349 26.6278 20.9313 27.025C21.3277 27.4223 21.7983 27.7374 22.3163 27.9524C22.8342 28.1674 23.3894 28.278 23.95 28.278C24.5106 28.278 25.0658 28.1674 25.5837 27.9524C26.1017 27.7374 26.5723 27.4223 26.9687 27.025C27.3651 26.6278 27.6796 26.1562 27.8941 25.6372C28.1087 25.1181 28.2191 24.5618 28.2191 24C28.2191 23.4382 28.1087 22.8819 27.8941 22.3629C27.6796 21.8439 27.3651 21.3723 26.9687 20.975C26.5723 20.5778 26.1017 20.2627 25.5837 20.0477C25.0658 19.8327 24.5106 19.722 23.95 19.722ZM11.991 32.51L11.0489 32.27C4.02759 30.492 0 27.474 0 23.992C0 20.51 4.02759 17.492 11.0489 15.714L11.991 15.476L12.2564 16.412C12.9677 18.8675 13.8775 21.2607 14.9767 23.568L15.1783 23.994L14.9767 24.42C13.8756 26.7266 12.9658 29.12 12.2564 31.576L11.991 32.51ZM10.6118 17.9C5.27499 19.402 1.99982 21.7 1.99982 23.992C1.99982 26.282 5.27499 28.58 10.6118 30.084C11.2645 28.0039 12.0526 25.9689 12.9709 23.992C12.0515 22.0156 11.2635 19.9805 10.6118 17.9ZM35.909 32.51L35.6436 31.572C34.933 29.1167 34.0225 26.724 32.9213 24.418L32.7197 23.992L32.9213 23.566C34.0221 21.2592 34.9326 18.8658 35.6436 16.41L35.909 15.474L36.8531 15.712C43.8724 17.49 47.9 20.508 47.9 23.992C47.9 27.476 43.8724 30.492 36.8531 32.27L35.909 32.51ZM34.9291 23.992C35.8871 26.07 36.6794 28.112 37.2882 30.084C42.627 28.58 45.9002 26.282 45.9002 23.992C45.9002 21.7 42.625 19.404 37.2882 17.9C36.6363 19.9805 35.8483 22.0156 34.9291 23.992ZM10.5979 17.89L10.3324 16.956C8.35855 9.98403 8.9573 4.98803 11.975 3.24403C14.9348 1.53203 19.6869 3.55403 24.6665 8.67603L25.3451 9.37403L24.6665 10.072C22.8971 11.9152 21.2805 13.8998 19.8326 16.006L19.5632 16.392L19.0941 16.432C16.5473 16.6332 14.0209 17.0412 11.5399 17.652L10.5979 17.89ZM14.382 4.63003C13.8471 4.63003 13.3741 4.74603 12.9749 4.97603C10.9911 6.12203 10.6398 10.106 12.0069 15.482C14.1338 15.0079 16.2892 14.6732 18.4595 14.48C19.7117 12.6958 21.0798 10.9961 22.5549 9.39203C19.4414 6.35403 16.4936 4.63003 14.382 4.63003ZM33.52 45.354C33.518 45.354 33.518 45.354 33.52 45.354C30.676 45.354 27.0236 43.208 23.2335 39.308L22.5549 38.61L23.2335 37.912C25.0024 36.0682 26.6184 34.083 28.0654 31.976L28.3348 31.59L28.8019 31.55C31.35 31.3499 33.8778 30.9426 36.3601 30.332L37.3021 30.094L37.5696 31.03C39.5394 37.998 38.9427 42.996 35.925 44.738C35.192 45.1534 34.362 45.3659 33.52 45.354ZM25.3451 38.592C28.4586 41.63 31.4064 43.354 33.518 43.354H33.52C34.0529 43.354 34.5279 43.238 34.9251 43.008C36.9089 41.862 37.2622 37.876 35.8931 32.5C33.7657 32.9748 31.6096 33.3095 29.4385 33.502C28.1878 35.2875 26.8203 36.9879 25.3451 38.592ZM37.3021 17.89L36.3601 17.652C33.8781 17.0395 31.3503 16.6314 28.8019 16.432L28.3348 16.392L28.0654 16.006C26.6192 13.8991 25.0031 11.9145 23.2335 10.072L22.5549 9.37403L23.2335 8.67603C28.2111 3.55603 32.9612 1.53403 35.925 3.24403C38.9427 4.98803 39.5414 9.98403 37.5696 16.954L37.3021 17.89ZM29.4385 14.48C31.7178 14.688 33.8833 15.026 35.8931 15.482C37.2622 10.106 36.9089 6.12203 34.9251 4.97603C32.9532 3.83403 29.2469 5.58403 25.3451 9.39203C26.8195 10.9962 28.1869 12.6959 29.4385 14.48ZM14.382 45.354C13.5393 45.3663 12.7086 45.1537 11.975 44.738C8.9573 42.996 8.35855 38 10.3324 31.03L10.5959 30.094L11.5379 30.332C13.8431 30.914 16.3858 31.324 19.0921 31.55L19.5612 31.59L19.8286 31.976C21.2767 34.0827 22.8933 36.0679 24.6625 37.912L25.3411 38.61L24.6625 39.308C20.8744 43.208 17.222 45.354 14.382 45.354ZM12.0069 32.5C10.6378 37.876 10.9911 41.862 12.9749 43.008C14.9448 44.134 18.6491 42.398 22.5549 38.592C21.0804 36.9867 19.7123 35.2864 18.4595 33.502C16.2891 33.3097 14.1336 32.975 12.0069 32.5ZM23.95 33.756C22.3074 33.756 20.619 33.684 18.9285 33.544L18.4595 33.504L18.19 33.118C17.2338 31.7412 16.3349 30.3254 15.4956 28.874C14.6588 27.4216 13.8825 25.9349 13.1685 24.418L12.9689 23.992L13.1685 23.566C13.8824 22.0491 14.6587 20.5625 15.4956 19.11C16.3219 17.678 17.23 16.25 18.19 14.866L18.4595 14.48L18.9285 14.44C22.2708 14.156 25.6312 14.156 28.9735 14.44L29.4405 14.48L29.708 14.866C31.6223 17.6202 33.3027 20.5304 34.7315 23.566L34.9331 23.992L34.7315 24.418C33.3061 27.4555 31.6256 30.366 29.708 33.118L29.4405 33.504L28.9735 33.544C27.283 33.684 25.5926 33.756 23.95 33.756ZM19.5652 31.588C22.519 31.81 25.381 31.81 28.3368 31.588C29.9871 29.1705 31.4522 26.6313 32.7197 23.992C31.4544 21.3512 29.9885 18.8117 28.3348 16.396C25.4158 16.174 22.4842 16.174 19.5652 16.396C17.9108 18.8113 16.4448 21.3508 15.1803 23.992C16.4492 26.631 17.9149 29.1702 19.5652 31.588Z"
            fill="#61DAFB"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="47.9" height="48" fill="white" />
          </clipPath>
        </defs>
      </>
    ),
    viewBox: '0 0 48 48',
  },
  frontEnd: {
    shape: (
      <>
        <path
          d="M120.114 115.29C126.5 115.29 131.666 109.156 131.666 101.659L131.724 33.5017C131.724 26.0046 126.497 19.87 120.113 19.87H27.2229C20.8364 19.8712 15.6115 26.0058 15.6115 33.5028V101.66C15.6115 109.157 20.8385 115.291 27.2229 115.291H4V128.922H143.337V115.29H120.114ZM27.2229 33.5028H120.114V101.66H27.2229V33.5028Z"
          fill="#2E2E2E"
        />
        <path d="M120.74 33.2114H27.341V100.33H120.74V33.2114Z" fill="white" />
        <path
          d="M35.0828 43.6552H83.3146V64.5172H35.0828V43.6552Z"
          fill="#A4C5FF"
        />
        <path
          d="M111.182 43.6552V89.1724H88.6737V43.6552H111.182Z"
          fill="#4079FF"
        />
        <path
          d="M35.0828 68.3103H83.3146V89.1724H35.0828V68.3103Z"
          fill="#6D63FF"
        />
      </>
    ),
    viewBox: '0 0 148 148',
  },
  css: {
    shape: (
      <>
        <path d="M275 128h1505l-266 1333-804 267-698-267 71-356h297l-29 147 422 161 486-161 68-339h-1208l58-297h1209l38-191h-1208z" />
      </>
    ),
    viewBox: '0 0 1792 1792',
  },
  javascript: {
    shape: (
      <>
        <rect width="630" height="630" fill="#f7df1e" />
        <path d="m423.2 492.19c12.69 20.72 29.2 35.95 58.4 35.95 24.53 0 40.2-12.26 40.2-29.2 0-20.3-16.1-27.49-43.1-39.3l-14.8-6.35c-42.72-18.2-71.1-41-71.1-89.2 0-44.4 33.83-78.2 86.7-78.2 37.64 0 64.7 13.1 84.2 47.4l-46.1 29.6c-10.15-18.2-21.1-25.37-38.1-25.37-17.34 0-28.33 11-28.33 25.37 0 17.76 11 24.95 36.4 35.95l14.8 6.34c50.3 21.57 78.7 43.56 78.7 93 0 53.3-41.87 82.5-98.1 82.5-54.98 0-90.5-26.2-107.88-60.54zm-209.13 5.13c9.3 16.5 17.76 30.45 38.1 30.45 19.45 0 31.72-7.61 31.72-37.2v-201.3h59.2v202.1c0 61.3-35.94 89.2-88.4 89.2-47.4 0-74.85-24.53-88.81-54.075z" />
      </>
    ),
    viewBox: '0 0 630 630',
  },
  webDesign: {
    shape: (
      <>
        <rect width="48" height="48" fill="#B8DDFF" />
        <rect
          x="0.5"
          y="0.5"
          width="47"
          height="47"
          stroke="black"
          strokeOpacity="0.1"
        />
        <circle cx="14" cy="33" r="4.5" stroke="#1F202B" />
        <line x1="9" y1="12" x2="13" y2="12" stroke="#1F202B" />
        <line x1="16" y1="12" x2="20" y2="12" stroke="#1F202B" />
        <path d="M23.5 12C27.5 12 35 13.7 35 28.5" stroke="#1F202B" />
        <line
          x1="31.3536"
          y1="25.1464"
          x2="35.3536"
          y2="29.1464"
          stroke="#1F202B"
        />
        <line
          x1="34.6464"
          y1="29.1464"
          x2="38.6464"
          y2="25.1464"
          stroke="#1F202B"
        />
        <line
          x1="32.2072"
          y1="38.3094"
          x2="38.5712"
          y2="33.3597"
          stroke="#1F202B"
        />
        <line
          x1="32.3536"
          y1="32.6464"
          x2="38.0104"
          y2="38.3033"
          stroke="#1F202B"
        />
      </>
    ),
    viewBox: '0 0 48 48',
  },
  poland: {
    shape: (
      <>
        <rect width="60" height="38" fill="white" />
        <rect width="60" height="19" fill="white" />
        <rect y="19" width="60" height="19" fill="#DC143C" />
      </>
    ),
    viewBox: '0 0 60 38',
  },
  greatBritain: {
    shape: (
      <>
        <clipPath id="t">
          <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
        </clipPath>
        <path d="M0,0 v30 h60 v-30 z" fill="#00247d" />
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
        <path
          d="M0,0 L60,30 M60,0 L0,30"
          clipPath="url(#t)"
          stroke="#cf142b"
          strokeWidth="4"
        />
        <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
        <path d="M30,0 v30 M0,15 h60" stroke="#cf142b" strokeWidth="6" />
      </>
    ),
    viewBox: '0 0 60 30',
  },
}

const Icon = ({ icon, ml, mr, hover, ...props }) => (
  <Wrapper
    {...props}
    viewBox={icons[icon].viewBox}
    preserveAspectRatio="none"
    hover={hover}
    ml={ml}
    mr={mr}
  >
    {icons[icon].shape}
  </Wrapper>
)

Icon.propTypes = {
  stroke: PropTypes.string,
  fill: PropTypes.string,
  width: PropTypes.string,
  icon: PropTypes.oneOf(Object.keys(icons)).isRequired,
  mx: PropTypes.number,
  my: PropTypes.number,
  mr: PropTypes.number,
  ml: PropTypes.number,
}

Icon.defaultProps = {
  stroke: 'transparent',
  width: '18px',
  fill: 'none',
  mx: 0,
  my: 0,
  mr: 0,
  ml: 0,
}

export default Icon
