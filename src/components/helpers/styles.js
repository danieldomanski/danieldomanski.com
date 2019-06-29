import theme from '../../config/theme'

export const fontSize = value => theme.textSizes[value]
export const fontWeight = value => theme.fontWeights[value]
export const lineHeight = value => theme.leading[value]
export const color = value => theme.colors[value]
export const margin = (mx, my) => `${theme.margin[my]} ${theme.margin[mx]}`
