import theme from '../../config/theme'

export const getComponentTheme = (component, type) =>
  theme.components[component][type]
export const fontSize = value => theme.textSizes[value]
export const fontWeight = value => theme.fontWeights[value]
export const lineHeight = value => theme.leading[value]
export const color = value => theme.colors[value]
export const spacing = (x, y) => `${theme.spacing[y]} ${theme.spacing[x]}`
