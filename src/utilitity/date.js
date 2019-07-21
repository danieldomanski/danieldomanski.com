/* eslint-disable import/prefer-default-export */
import { format } from 'date-fns'

const locales = {
  en: import('date-fns/locale/en'),
  pl: import('date-fns/locale/pl'),
}

/**
 * formatDate -
 * @param slice      - Raw prismic slice
 * @returns {object} - Object containg data according to slice type
 */

export const formatDate = (
  date,
  formatStr = 'DD MMM, YYYY',
  localeStr = 'en'
) => format(date, formatStr, { locale: locales[localeStr] })
