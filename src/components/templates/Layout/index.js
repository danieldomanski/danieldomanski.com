import React, { useState } from 'react'

export const LocaleContext = React.createContext()

const Layout = ({ children }) => {
  const [locale, set] = useState('en')

  return (
    <LocaleContext.Provider value={[locale, set]}>
      {children}
    </LocaleContext.Provider>
  )
}

export default Layout
