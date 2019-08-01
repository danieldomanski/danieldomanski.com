const colors = {
  // theme colors

  // black/gray
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
  // white/gray
  secondary: [
    '#FFF',
    '#FEFEFE',
    '#FBFBFB',
    '#F3F3F3',
    '#EBEBEB',
    '#E3E3E3',
    '#DBDBDB',
    '#D4D4D4',
    '#C1C1C1',
  ],
  // blue
  accent: [
    '#E7EFFF',
    '#A0BFFF',
    '#8BB1FF',
    '#A2C1FF',
    '#8BB1FF',
    '#73A2FF',
    '#4583FF',
    '#2E73FF',
    '#0055FF',
  ],
}

const theme = {
  width: [16, 32, 64, 128, 256],
  heights: [16, 32, 64, 128, 256],
  breakpoints: ['576px', '768px', '992px', '1200px'],
  shadows: {
    default: '0 2px 4px 0 rgba(0,0,0,0.10)',
    md: '0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08)',
    lg: '0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)',
    inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
    outline: '0 0 0 3px rgba(52,144,220,0.5)',
    none: 'none',
  },
  colors,
  space: {
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
    '48': '12rem',
    '64': '15rem',
  },
  fonts: {
    sans: [
      'Montserrat',
      'system-ui',
      'BlinkMacSystemFont',
      '-apple-system',
      'Segoe UI',
      'Roboto',
      'Oxygen',
      'Ubuntu',
      'Cantarell',
      'Fira Sans',
      'Droid Sans',
      'Helvetica Neue',
      'sans-serif',
    ],
    serif: [
      'Merriweather',
      'DejaVu Serif',
      'Lucidabright',
      'Lucida Bright',
      'Constantia',
      'Lucida Serif',
      'Lucida',
      'Bitstream Vera Serif',
      'Liberation Serif',
      'Georgia',
      'serif',
    ],
    mono: [
      'Menlo',
      'Monaco',
      'Consolas',
      'Liberation Mono',
      'Courier New',
      'monospace',
    ],
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
    '10xl': '8rem', // 128px
    '12xl': '10rem', // 160px
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
    relaxed: 1.75,
    loose: 2,
  },
}

theme.components = {
  bottomFooter: {
    primary: {
      backgroundColor: theme.colors.primary[8],
      color: theme.colors.primary[2],
    },
    secondary: {
      backgroundColor: 'transparent',
      color: theme.colors.primary[8],
    },
  },

  logo: {
    primary: {
      color: theme.colors.primary[2],
      backgroundColor: theme.colors.primary[8],
      borderColor: theme.colors.primary[5],
    },
    secondary: {
      color: theme.colors.primary[8],
      backgroundColor: theme.colors.primary[4],
      borderColor: theme.colors.primary[7],
    },
  },
  localeSwitcher: {
    primary: {
      color: theme.colors.primary[4],
      underlineColor: theme.colors.primary[7],
    },
    secondary: {
      color: theme.colors.primary[8],
      underlineColor: theme.colors.primary[3],
    },
  },
  highlights: {
    dark: {
      from: 'rgba(80, 80, 80, .5)',
      to: 'rgba(80, 80, 80, .9)',
    },
    light: {
      from: 'rgba(255, 255, 255, 0.5)',
      to: 'rgba(255, 255, 255, 0.75)',
    },
  },
  collapsable: {
    dark: {
      height: '2px',
      bottom: '0',
      backgroundColor: theme.colors.primary[7],
      hoverColor: theme.colors.primary[1],
      color: theme.colors.primary[6],
    },
    bright: {
      height: '2px',
      bottom: '6px',
      backgroundColor: theme.colors.primary[1],
      hoverColor: theme.colors.primary[5],
      color: theme.colors.primary[6],
    },
    accent: {
      height: '1px',
      bottom: '3px',
      backgroundColor: theme.colors.accent[4],
      hoverColor: theme.colors.accent[5],
      color: theme.colors.accent[5],
    },
  },
  filters: {
    primary: {
      color: theme.colors.accent[7],
      hoverColor: theme.colors.accent[1],
      backgroundColor: theme.colors.accent[0],
      active: {
        backgroundColor: theme.colors.accent[6],
        hoverColor: theme.colors.accent[7],
        color: theme.colors.secondary[1],
      },
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
      px: 6,
      py: 4,
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
