import React, { useState } from 'react'

export const SlidesContext = React.createContext()

const SlidesProvider = ({ children }) => {
  const [activeSlide, setActive] = useState(0)

  return (
    <SlidesContext.Provider value={[activeSlide, setActive]}>
      {children}
    </SlidesContext.Provider>
  )
}

export default SlidesProvider
