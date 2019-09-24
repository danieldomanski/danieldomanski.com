import config from '../config/website'

export const getPolishPathname = pathname => {
  let splitted = pathname.split('/')

  if (splitted[1] === 'en') splitted.splice(1, 1)

  return `${config.siteUrl}${splitted.join('/')}`
}

export const getEnglishPathname = pathname => {
  let splitted = pathname.split('/')

  if (splitted[1] !== 'en') splitted.splice(1, 0, 'en')

  return `${config.siteUrl}${splitted.join('/')}`
}

const contentKeys = {
  projects: 'worksPage',
  about: 'aboutPage',
  blog: 'blogsPage',
  singleProject: 'projectPage',
  singlePost: 'postPage',
  tag: 'tagsPage',
}

export const formatPathnameToContentKey = pathname => {
  let splitted = pathname.split('/')
  const key = splitted[0] === 'en' ? splitted[1] : splitted[0]

  switch (key) {
    case 'about':
      return contentKeys[key]
    case 'projects':
      return splitted.length > 1 && pathname !== 'en/projects'
        ? contentKeys['singleProject']
        : contentKeys[key]
    case 'blog':
      return splitted.length > 1 && pathname !== 'en/blog'
        ? contentKeys['singlePost']
        : contentKeys[key]
    case 'tag':
      return contentKeys[key]
    default:
      return 'home'
  }
}

export const getTitleAndDescription = (pathname, name, content) => {
  let title
  let trimmedPath = pathname.replace(/^\/|\/$/g, '')
  const contentKey = formatPathnameToContentKey(trimmedPath)

  if (name.includes('404')) {
    title = '404 - Daniel Domański'
  } else {
    title =
      contentKey === 'home'
        ? config.siteTitle
        : `${content[contentKey].title} – ${config.siteTitleShort}`
  }

  const description =
    contentKey === 'projectPage' || contentKey === 'postPage'
      ? content[contentKey].description
      : config.siteDescription

  return { title, description }
}
