import React from 'react'
import styled, { keyframes } from 'styled-components'

const smooth = keyframes`
    0% {
        d: path("M519 183.5C315.824 124.052 0 132.5 0 132.5V0H2000V355.5C2000 355.5 1532.16 460.158 1241.5 412.5C947.338 364.268 789 262.5 519 183.5Z");
    }

    100% {
        d: path("M519 183.5C325.227 98.2558 0 117.5 0 117.5V0H2000V392.5C2000 392.5 1540.28 400.789 1244.5 364.5C947 328 764.5 291.5 519 183.5Z");
    }
`

const SvgWrapper = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  path {
    fill: rgba(0, 0, 0, 0.2);
    animation: ${smooth} 6s cubic-bezier(0.215, 0.61, 0.355, 1) infinite
      alternate;
  }
`

const Wave = () => (
  <SvgWrapper preserveAspectRatio="none" viewBox="0 0 2000 450">
    <path />
  </SvgWrapper>
)

export default Wave
