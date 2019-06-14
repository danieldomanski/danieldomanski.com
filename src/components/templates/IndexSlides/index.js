import React from 'react'
import styled from 'styled-components'
import HomeSlide from './HomeSlide'
import ServicesSlide from './ServicesSlide'
import ContactSlide from './ContactSlide'
import ProjectsSlide from './ProjectsSlide'

const Slider = styled.section`
  position: absolute;
  top: 0;
  margin: auto;
  left: 0;
  width: calc(100% - 6em);
  height: 100%;
  transition: transform 1s cubic-bezier(0.86, 0, 0.07, 1) 0s;
  transform: translate3d(0vw, -${props => props.idx * 100}vh, 0px);
`

const SliderContent = ({ activeSlide }) => (
  <Slider idx={activeSlide}>
    <HomeSlide active={activeSlide === 0} />
    <ServicesSlide active={activeSlide === 1} />
  </Slider>
)

export default SliderContent
