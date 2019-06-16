import { useEffect, useRef, useContext } from 'react'
import _throttle from 'lodash.throttle'
import { SlidesContext } from '../context/SlidesContext'

function useThrottledScroll(slidesCount) {
  const [activeSlide, setActive] = useContext(SlidesContext)

  const setSlide = useRef(
    _throttle(
      idx => {
        setActive(idx)
      },
      1500,
      { leading: true, trailing: false }
    )
  )

  const handleScroll = e => {
    if (e.deltaY < 0) {
      return activeSlide === 0 ? null : setSlide.current(activeSlide - 1)
    }

    return activeSlide === slidesCount
      ? null
      : setSlide.current(activeSlide + 1)
  }

  useEffect(
    () => {
      window.addEventListener('wheel', handleScroll)

      return () => {
        window.removeEventListener('wheel', handleScroll)
      }
    },
    [activeSlide]
  )
}

export default useThrottledScroll
