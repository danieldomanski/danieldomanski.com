/* eslint-disable import/no-extraneous-dependencies */

import React, { useState, useEffect, useContext } from 'react'
import { Location } from '@reach/router'
import { formatRawDataToContext } from '../utils/format'

const initialState = {
  home: {
    hero: {
      title: '',
      description: '',
    },
    about: {
      title: '',
      description: '',
    },
    works: {
      title: '',
      description: '',
    },
    blog: {
      title: '',
      description: '',
    },
    workWithMe: {
      title: '',
      subtitle: '',
      description: '',
    },
  },
  footer: {
    codeAvailability: '',
  },
  header: {
    nav: {
      home: '',
      projects: '',
      articles: '',
      about: '',
    },
  },
  notFoundPage: {
    title: '',
    subtitle: '',
    description: '',
  },
  worksPage: {
    title: '',
  },
  projectPage: {
    title: '',
    description: '',
    role: '',
    client: '',
    technologies: '',
  },
  blogsPage: {
    title: '',
  },
  postPage: {
    title: '',
    description: '',
  },
  aboutPage: {
    title: '',
    aboutGroup: [],
    aboutText: [],
    aboutMe: '',
  },
}

export const ContentContext = React.createContext(initialState)
export const LocaleContext = React.createContext()

const ContentProvider = ({ children }) => {
  const [content, set] = useState(initialState)
  const [locale, setLocale] = useState('pl')

  return (
    <Location>
      {({ location }) => {
        console.log('content ', location)
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
    const formattedData = formatRawDataToContext(data)

    setContent({ ...content, ...formattedData })
  }, [data])

  return content
}

export default ContentProvider
