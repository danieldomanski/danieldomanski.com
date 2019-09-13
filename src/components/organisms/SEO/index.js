import React, { useContext } from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import config from '../../../config/website'
import { LocaleContext, ContentContext } from '../../../context/ContentContext'
import { getPolishPathname, getEnglishPathname } from '../../../utils/locale'

const contentKeys = {
  projects: 'projectsPage',
  about: 'aboutPage',
  blog: 'blogsPage',
  singleProject: 'projectPage',
  singlePost: 'postPage',
  tag: 'tagsPage',
}

const formatPathnameToContentKey = pathname => {
  console.log({ pathname })
  let splitted = pathname.split('/')
  const key = splitted[0] === 'en' ? splitted[1] : splitted[0]

  switch (key) {
    case 'about':
      return contentKeys[key]
    case 'projects':
      return splitted.length > 2
        ? contentKeys['singleProject']
        : contentKeys[key]
    case 'blog':
      return splitted.length > 2 ? contentKeys['singlePost'] : contentKeys[key]
    case 'tag':
      return contentKeys[key]
    default:
      return 'home'
  }
}

const getTitleAndDescription = (pathname, content) => {
  let trimmedPath = pathname.replace(/^\/|\/$/g, '')

  const contentKey = formatPathnameToContentKey(trimmedPath)
  const title =
    contentKey === 'home'
      ? config.siteTitle
      : `${content[contentKey].title} - ${config.siteTitleShort}`

  const description =
    contentKey === 'projectPage' || contentKey === 'postPage'
      ? content[contentKey].description
      : config.siteDescription

  return { title, description }
  console.log({ contentKey, title, description })
}

const SEO = ({ location: { pathname } }) => {
  const [locale] = useContext(LocaleContext)
  const [content] = useContext(ContentContext)
  const article = false
  const url = getPolishPathname(pathname, config.siteUrl)
  const englishUrl = getEnglishPathname(pathname, config.siteUrl)

  const { title, description } = getTitleAndDescription(pathname, content)
  console.log({ title, description })
  return (
    <Helmet>
      <html lang={locale} />
      <title>{title}</title>
      <link rel="alternate" hrefLang="x-default" href={url} />
      {!article && <link rel="alternate" hrefLang={'pl'} href={url} />}
      {!article && <link rel="alternate" hrefLang="en" href={englishUrl} />}
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
