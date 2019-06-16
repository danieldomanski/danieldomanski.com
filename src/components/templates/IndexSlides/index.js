import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  useContext,
} from 'react'
import styled from 'styled-components'
import HomeSlide from './HomeSlide'
import ServicesSlide from './ServicesSlide'
import MeSlide from './MeSlide'
import ContactSlide from './ContactSlide'
import ProjectsSlide from './ProjectsSlide'
import Slide from './Slide'
import useSlidesScroll from '../../../hooks/useSlidesScroll'
import { SlidesContext } from '../../../context/SlidesContext'

const Slider = styled.section`
${tw`h-full absolute pin-t pin-l m-auto`}  
  width: calc(100% - 6em);
  transition: transform 1s cubic-bezier(0.86, 0, 0.07, 1) 0s;
  transform: translate3d(0vw, ${props => -props.position}vh, 0px);'
`

const SliderContent = () => {
  useSlidesScroll(5)
  const [slidesData] = useContext(SlidesContext)
  const { active, positions } = slidesData

  const isActive = useCallback(idx => active === idx, [active])

  return (
    <Slider position={positions[active]}>
      <Slide position={positions[0]} active={isActive(0)}>
        <HomeSlide active={isActive(0)} />
      </Slide>
      <Slide position={positions[1]} active={isActive(1)}>
        <ServicesSlide active={isActive(1)} />
      </Slide>
      <Slide position={positions[2]} active={isActive(2)}>
        <ProjectsSlide active={isActive(2)} />
      </Slide>
      <Slide position={positions[3]} active={isActive(3)}>
        <MeSlide active={isActive(3)} />
      </Slide>
      <Slide position={positions[4]} active={isActive(4)}>
        <ContactSlide active={isActive(4)} />
      </Slide>
    </Slider>
  )
}

export default SliderContent
