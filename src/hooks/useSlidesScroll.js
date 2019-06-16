import { useEffect, useRef, useContext } from 'react'
import _throttle from 'lodash.throttle'
import { SlidesContext } from '../context/SlidesContext'

function useSlidesScroll(slidesCount) {
  const [slideData, set] = useContext(SlidesContext)
  const { active, positions } = slideData

  const setSlide = useRef(
    _throttle(
      (idx, positionDifference) => {
        const prevSlide = positionDifference < 0 ? active - 1 : active + 1
        set({
          active: idx,
          positions: {
            ...positions,
            [active]: positions[prevSlide] + positionDifference,
          },
        })
      },
      1500,
      { leading: true, trailing: false }
    )
  )

  const handleScroll = e => {
    if (e.deltaY < 0) {
      return active === 0 ? null : setSlide.current(active - 1, 100)
    }

    return active === slidesCount ? null : setSlide.current(active + 1, -100)
  }

  useEffect(
    () => {
      window.addEventListener('wheel', handleScroll)

      return () => {
        window.removeEventListener('wheel', handleScroll)
      }
    },
    [active]
  )
}

export default useSlidesScroll
