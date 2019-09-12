/* eslint-disable import/prefer-default-export */
import { format, parseISO } from 'date-fns'
import { pl } from 'date-fns/locale'

const locales = {
  pl,
}

/**
 * formatDate -
 * @param date           - date string
 * @param formatStr      - format in which date should be returned
 * @param localeStr      - language of date string parts (e.g. months)
 * @returns {object}     - date in given format and locale
 */

export const formatDate = (date, formatStr = 'dd MMMM, yyyy') =>
  format(parseISO(date), formatStr, { locale: locales.pl })
