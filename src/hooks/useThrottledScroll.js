import { useEffect, useRef, useState } from 'react'
import _throttle from 'lodash.throttle'

function useThrottledScroll(slidesCount) {
  const [activeSlide, set] = useState(0)

  const setSlide = useRef(
    _throttle(
      idx => {
        set(idx)
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

  return [activeSlide, set]
}

export default useThrottledScroll
