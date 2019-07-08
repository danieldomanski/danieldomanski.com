const colors = {
  // theme colors
  primary: [
    '#F4F4F4',
    '#E9E9E9',
    '#D4D4D4',
    '#CECECE',
    '#C4C4C4',
    '#A1A1A1',
    '#8F8F8F',
    '#5A5A5A',
    '#363636',
  ],
}

const theme = {
  breakpoints: ['576px', '768px', '992px', '1200px'],
  colors,
  spacing: {
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
  },
  fontSizes: {
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
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  lineHeights: {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },
}

theme.components = {
  logo: {
    primary: {
      fontColor: theme.colors['primary-300'],
      bgColor: theme.colors['primary-900'],
      borderColor: theme.colors['primary-600'],
    },
    secondary: {
      fontColor: theme.colors['primary-900'],
      bgColor: theme.colors['primary-500'],
      borderColor: theme.colors['primary-800'],
    },
  },
  localeSwitcher: {
    primary: {
      fontColor: theme.colors['primary-300'],
      underlineColor: theme.colors['primary-800'],
    },
    secondary: {
      fontColor: theme.colors['primary-900'],
      underlineColor: theme.colors['primary-500'],
    },
  },
  highlights: {
    dark: {
      from: 'rgba(60, 60, 60, .5)',
      to: 'rgba(60, 60, 60, .9)',
    },
    light: {
      from: 'rgba(255, 255, 255, 0.5)',
      to: 'rgba(255, 255, 255, 0.75)',
    },
  },
}

theme.buttons = {
  colors: {
    primary: {
      backgroundColor: theme.colors.primary[0],
      color: theme.colors.primary[7],
    },
    secondary: {
      backgroundColor: theme.colors.primary[6],
      color: theme.colors.primary[0],
    },
  },
  sizes: {
    sm: {
      px: 2,
      py: 1,
      fontSize: 'sm',
    },
    md: {
      px: 3,
      py: 1,
      fontSize: 'base',
    },
    lg: {
      px: 4,
      py: 3,
      fontSize: 'lg',
    },
    xl: {
      px: 6,
      py: 3,
      fontSize: 'xl',
    },
  },
}

export default theme
