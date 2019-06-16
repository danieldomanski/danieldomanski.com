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
import useThrottledScroll from '../../../hooks/useThrottledScroll'
import { SlidesContext } from '../../../context/SlidesContext'

const Slider = styled.section`
${tw`h-full absolute pin-t pin-l m-auto`}  
  width: calc(100% - 6em);
  transition: transform 1s cubic-bezier(0.86, 0, 0.07, 1) 0s;
  transform: translate3d(0vw, ${props => -props.position}vh, 0px);'
`

const SliderContent = () => {
  useThrottledScroll(5)
  const [activeSlide] = useContext(SlidesContext)

  const [slidesPositions, set] = useState({
    0: 0,
    1: 100,
    2: 200,
    3: 300,
    4: 400,
  })

  const prevSlide = useRef(0)

  useEffect(
    () => {
      if (prevSlide.current === activeSlide) return

      const positionDiff = activeSlide < prevSlide.current ? -100 : 100
      set({
        ...slidesPositions,
        [activeSlide]: slidesPositions[prevSlide.current] + positionDiff,
      })
      prevSlide.current = activeSlide
    },
    [activeSlide]
  )

  const isActive = useCallback(idx => activeSlide === idx, [activeSlide])
  console.log({ activeSlide, slidesPositions })
  return (
    <Slider position={slidesPositions[activeSlide]}>
      <Slide position={slidesPositions[0]} active={isActive(0)}>
        <HomeSlide active={isActive(0)} />
      </Slide>
      <Slide position={slidesPositions[1]} active={isActive(1)}>
        <ServicesSlide active={isActive(1)} />
      </Slide>
      <Slide position={slidesPositions[2]} active={isActive(2)}>
        <ProjectsSlide active={isActive(2)} />
      </Slide>
      <Slide position={slidesPositions[3]} active={isActive(3)}>
        <MeSlide active={isActive(3)} />
      </Slide>
      <Slide position={slidesPositions[4]} active={isActive(4)}>
        <ContactSlide active={isActive(4)} />
      </Slide>
    </Slider>
  )
}

export default SliderContent
