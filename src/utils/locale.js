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
  return splitted.join('/')
}

export const getPolishPathname = pathname => {
  let splitted = pathname.split('/')

  if (splitted[1] === 'en') splitted.splice(1, 1)

  return splitted.join('/')
}
