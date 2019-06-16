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
    const diff = e.deltaY < 0 ? -1 : 1

    if (active + diff === -1 || active + diff === slidesCount) return

    setSlide.current(active + diff, 100 * -diff)
  }

  useEffect(
    () => {
      window.addEventListener('wheel', handleScroll, { passive: true })

      return () => {
        window.removeEventListener('wheel', handleScroll, { passive: true })
      }
    },
    [active]
  )
}

export default useSlidesScroll
