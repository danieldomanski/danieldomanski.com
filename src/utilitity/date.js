/* eslint-disable import/prefer-default-export */
import { format } from 'date-fns'

const locales = {
  en: import('date-fns/locale/en'),
  pl: import('date-fns/locale/pl'),
}

/**
 * formatDate -
 * @param date           - date string
 * @param formatStr      - format in which date should be returned
 * @param localeStr      - language of date string parts (e.g. months)
 * @returns {object}     - date in given format and locale
 */

export const formatDate = (
  date,
  formatStr = 'DD MMM, YYYY',
  localeStr = 'en'
) => format(date, formatStr, { locale: locales[localeStr] })
