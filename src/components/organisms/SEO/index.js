import React, { useContext } from 'react'
import Helmet from 'react-helmet'
import { LocaleContext, ContentContext } from '../../../context/ContentContext'
import {
  getPolishPathname,
  getEnglishPathname,
  getTitleAndDescription,
} from '../../../utils/seo'

const SEO = ({ location: { pathname }, name }) => {
  if (typeof window !== `undefined`) {
    const [locale] = useContext(LocaleContext)
    const [content] = useContext(ContentContext)
    const polishUrl = getPolishPathname(pathname)
    const englishUrl = getEnglishPathname(pathname)
    const { title, description } = getTitleAndDescription(
      pathname,
      name,
      content
    )

    return (
      <Helmet>
        <html lang={locale} />
        <title>{title}</title>
        <link rel="alternate" hrefLang="x-default" href={polishUrl} />
        <link rel="alternate" hrefLang="pl" href={polishUrl} />
        <link rel="alternate" hrefLang="en" href={englishUrl} />
        <meta name="description" content={description} />
        <meta name="image" content="../../../static/banner.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16.png"
        />
        <link type="text/plain" href="/humans.txt" rel="author" />
      </Helmet>
    )
  }
  return null
}

export default SEO
