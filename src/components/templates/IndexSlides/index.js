import React from 'react'
import styled from 'styled-components'
import HomeSlide from './HomeSlide'
import ServicesSlide from './ServicesSlide'
import MeSlide from './MeSlide'
import ContactSlide from './ContactSlide'
import ProjectsSlide from './ProjectsSlide'

const Slider = styled.section`
${tw`h-full absolute pin-t pin-l m-auto`}  
  width: calc(100% - 6em);
  transition: transform 1s cubic-bezier(0.86, 0, 0.07, 1) 0s;
  transform: translate3d(0vw, -${props => props.idx * 100}vh, 0px);'
`

const SliderContent = ({ activeSlide }) => (
  <Slider idx={activeSlide}>
    <HomeSlide active={activeSlide === 0} />
    <ServicesSlide active={activeSlide === 1} />
    <ProjectsSlide active={activeSlide === 2} />
    <MeSlide active={activeSlide === 3} />
    <ContactSlide active={activeSlide === 4} />
  </Slider>
)

export default SliderContent
