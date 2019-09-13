import React, { useContext } from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import config from '../../../config/website'
import { StaticQuery, graphql } from 'gatsby'
import { LocaleContext, ContentContext } from '../../../context/ContentContext'
import { getPolishPathname } from '../../../utils/locale'

const SEO = ({ pathname }) => {
  const [locale] = useContext(LocaleContext)
  const content = useContext(ContentContext)
  const article = false
  const title = 'Daniel Domański'
  const url = getPolishPathname(pathname)
  const description = 'Full-stack web developer'

  console.log({ url, content, locale, pathname })

  return (
    <Helmet>
      <html lang={locale} />
      <title>{title}</title>
      <link rel="alternate" hrefLang="x-default" href={url} />
      {!article && (
        <link
          rel="alternate"
          hrefLang={locale === 'en' ? 'pl' : 'en'}
          href={url}
        />
      )}
      {!article && (
        <link
          rel="alternate"
          hrefLang={locale === 'en' ? 'en' : 'pl'}
          href={url}
        />
      )}
      <meta name="description" content={description} />
      <meta name="image" content={'/static/banner.png'} />
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
      <link
        type="text/plain"
        href={`${config.siteUrl}/humans.txt`}
        rel="author"
      />
    </Helmet>
  )
}

export default SEO

SEO.propTypes = {
  pathname: PropTypes.object.isRequired,
}

SEO.defaultProps = {
  pathname: false,
}
