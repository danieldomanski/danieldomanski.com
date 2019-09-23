export const getLocalizedPathname = (pathname, locale) => {
  const splitted = pathname.split('/')
  splitted.shift()
  const currentLocale = splitted[0] === 'en' ? 'en' : 'pl'

  if (currentLocale === locale) return splitted.join('/')

  if (locale === 'en') {
    splitted.unshift('en')
  }

  if (locale === 'pl') {
    splitted.shift()
  }

  return splitted.join('/').replace(/\/+$/, '')
}
