const colors = {
  // theme colors
  'primary-100': '#F4F4F4',
  'primary-200': '#E9E9E9',
  'primary-300': '#D4D4D4',
  'primary-400': '#CECECE',
  'primary-500': '#C4C4C4',
  'primary-600': '#A1A1A1',
  'primary-700': '#8F8F8F',
  'primary-800': '#5A5A5A',
  'primary-900': '#363636',
}

const spacing = {
  auto: 'auto',
  px: '1px',
  '0': '0',
  '1': '0.25rem',
  '2': '0.5rem',
  '3': '0.75rem',
  '4': '1rem',
  '5': '1.25rem',
  '6': '1.5rem',
  '8': '2rem',
  '10': '2.5rem',
  '12': '3rem',
  '16': '4rem',
  '20': '5rem',
  '24': '6rem',
  '32': '8rem',
}

const textSizes = {
  xs: '.75rem', // 12px
  sm: '.875rem', // 14px
  base: '1rem', // 16px
  lg: '1.125rem', // 18px
  xl: '1.25rem', // 20px
  '2xl': '1.5rem', // 24px
  '3xl': '1.875rem', // 30px
  '4xl': '2.25rem', // 36px
  '5xl': '3rem', // 48px
  '6xl': '4rem', // 64px
  '8xl': '6rem', // 96px
}

const fontWeights = {
  hairline: 100,
  thin: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
}

const leading = {
  none: 1,
  tight: 1.25,
  snug: 1.375,
  normal: 1.5,
  relaxed: 1.625,
  loose: 2,
}

const components = {
  logo: {
    primary: {
      fontColor: colors['primary-300'],
      bgColor: colors['primary-900'],
      borderColor: colors['primary-600'],
    },
    secondary: {
      fontColor: colors['primary-900'],
      bgColor: colors['primary-500'],
      borderColor: colors['primary-800'],
    },
  },
  localeSwitcher: {
    primary: {
      fontColor: colors['primary-300'],
      underlineColor: colors['primary-800'],
    },
    secondary: {
      fontColor: colors['primary-900'],
      underlineColor: colors['primary-500'],
    },
  },
}

export default {
  colors,
  spacing,
  textSizes,
  fontWeights,
  leading,
  components,
}
