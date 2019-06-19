import { useRef, useContext } from 'react'
import { SlidesContext } from '../context/SlidesContext'

function useSlidesClick() {
  const [slideData, set] = useContext(SlidesContext)
  const prevSlide = useRef()

  const { active, positions } = slideData

  const setSlide = (idx, positionDifference) => {
    set({
      active: idx,
      positions: {
        ...positions,
        [active]: positions[prevSlide.current] + positionDifference,
      },
    })
  }

  const handleClick = clickedSlide => {
    if (prevSlide.current === active) return

    const positionDiff = clickedSlide < prevSlide.current ? -100 : 100

    setSlide(clickedSlide, positionDiff)
  }

  return [active, handleClick]
}

export default useSlidesClick
