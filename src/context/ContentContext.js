import React, { useState, useEffect, useContext } from 'react'
import { Location } from '@reach/router'
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
export const LocaleContext = React.createContext()

const ContentProvider = ({ children }) => {
  const [content, set] = useState(initialState)
  const [locale, setLocale] = useState()

  return (
    <Location>
      {({ location }) => {
        const localeStr = location.pathname.split('/')[1] === 'en' ? 'en' : 'pl'
        setLocale(localeStr)
        return (
          <ContentContext.Provider value={[content, set]}>
            <LocaleContext.Provider value={[locale]}>
              {children}
            </LocaleContext.Provider>
          </ContentContext.Provider>
        )
      }}
    </Location>
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
