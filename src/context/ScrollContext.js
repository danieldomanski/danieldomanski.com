import React from 'react'
import useWindowScrollPosition from '@rehooks/window-scroll-position'

export const ScrollContext = React.createContext()

const ScrollProvider = ({ children }) => {
  const position = useWindowScrollPosition({ throttle: 100 })

  return (
    <ScrollContext.Provider value={[position]}>
      {children}
    </ScrollContext.Provider>
  )
}

export default ScrollProvider
