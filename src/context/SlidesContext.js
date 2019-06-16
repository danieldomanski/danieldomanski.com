import React, { useState } from 'react'

export const SlidesContext = React.createContext()

const SlidesProvider = ({ children }) => {
  const [slideData, set] = useState({
    active: 0,
    positions: {
      0: 0,
      1: 100,
      2: 200,
      3: 300,
      4: 400,
    },
  })

  return (
    <SlidesContext.Provider value={[slideData, set]}>
      {children}
    </SlidesContext.Provider>
  )
}

export default SlidesProvider
