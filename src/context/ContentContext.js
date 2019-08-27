import React, { useState, useEffect, useContext } from 'react'
import { formatRawDataToContext } from '../utilitity/format'

const initialState = {
  home: {},
  header: {
    nav: {
      home: '',
      projects: '',
      articles: '',
      about: '',
    },
  },
}

export const ContentContext = React.createContext(initialState)

const ContentProvider = ({ children }) => {
  const [content, set] = useState(initialState)

  return (
    <ContentContext.Provider value={[content, set]}>
      {children}
    </ContentContext.Provider>
  )
}

export const usePageContent = data => {
  const [content, setContent] = useContext(ContentContext)
  useEffect(() => {
    setContent(formatRawDataToContext(data))
  }, [data])

  return [content]
}

export default ContentProvider
