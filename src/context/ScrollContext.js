import React from 'react'
import useWindowScrollPosition from '@rehooks/window-scroll-position'

export const ScrollContext = React.createContext()

const ScrollProvider = ({ children, throttle }) => {
  const position = useWindowScrollPosition({ throttle: 0 })

  return (
    <ScrollContext.Provider value={[position]}>
      {children}
    </ScrollContext.Provider>
  )
}

ScrollProvider.defaultProps = {
  throttle: 100,
}

export default ScrollProvider
