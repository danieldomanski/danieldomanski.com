const colors = {
  // theme colors
  grey: ['#151B1E', '#1E2529', '#363636', '#453f3d', '#57504d'],

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
    '#252627',
    '#181818',
    '#0C0C0C',
  ],

  cosmic: ['#25273D', '#212235', '#101020', '#BED6FF', '#CAD4E6'],
  // white/gray
  secondary: [
    '#F4F5FF',
    '#E8EAF4',
    '#D5D6E0',
    '#CBCDD6',
    '#C1C3CC',
    '#B8B9C1',
    '#AEAFB7',
    '#A4A6AD',
    '#9B9CA3',
    '#929399',
  ],
  // blue
  accent: [
    '#E2EAFF',
    '#D1DEFF',
    '#D7F0F4',
    '#8BB1FF',
    '#A2C1FF',
    '#8BB1FF',
    '#73A2FF',
    '#4583FF',
    '#2E73FF',
    '#9FB0CE',
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
    '40': '10rem',
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
    xs: '.775rem', // 12.4px
    sm: '.875rem', // 14.4px
    base: '1rem', // 16px
    lg: '1.125rem', // 18px
    xl: '1.375rem', // 20px
    '2xl': '1.625rem', // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3.25rem', // 48px
    '6xl': '3.75rem', // 64px
    '8xl': '4.5rem', // 72px
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
      backgroundColor: 'transparent',
      color: theme.colors.secondary[1],
      secondaryColor: theme.colors.secondary[9],
    },
    secondary: {
      backgroundColor: 'rgba(240, 240, 240, 1)',
      color: theme.colors.primary[9],
      secondaryColor: theme.colors.primary[6],
    },
  },
  brand: {
    primary: {
      color: theme.colors.secondary[2],
    },
    secondary: {
      color: theme.colors.primary[9],
    },
  },
  navigation: {
    primary: {
      color: theme.colors.primary[6],
      active: {
        color: theme.colors.secondary[0],
        border: theme.colors.cosmic[3],
      },
    },
    secondary: {
      color: theme.colors.primary[7],
      active: {
        color: theme.colors.primary[11],
        border: theme.colors.secondary[2],
      },
    },
  },
  localeSwitcher: {
    primary: {
      color: theme.colors.secondary[5],
      activeColor: theme.colors.secondary[1],
      inactiveColor: theme.colors.primary[2],
    },
    secondary: {
      color: theme.colors.primary[6],
      activeColor: theme.colors.primary[9],
      inactiveColor: theme.colors.primary[2],
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
  filters: {
    primary: {
      color: theme.colors.accent[7],
      hoverColor: theme.colors.accent[1],
      backgroundColor: theme.colors.accent[0],
      active: {
        backgroundColor: theme.colors.accent[7],
        hoverColor: theme.colors.accent[6],
        color: theme.colors.secondary[0],
      },
    },
  },
}

theme.buttons = {
  colors: {
    primary: {
      backgroundColor: theme.colors.primary[6],
      color: theme.colors.primary[0],
    },
    secondary: {
      backgroundColor: 'transparent',
      color: theme.colors.primary[7],
    },
  },
  sizes: {
    sm: {
      px: 4,
      py: 2,
      fontSize: 'sm',
    },
    base: {
      px: 6,
      py: 3,
      fontSize: 'sm',
    },
    lg: {
      px: 6,
      py: 3,
      fontSize: 'base',
    },
    xl: {
      px: 8,
      py: 4,
      fontSize: 'lg',
    },
  },
}

export default theme
