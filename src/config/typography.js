import Typography from 'typography'

const typography = new Typography({
  googleFonts: [
    {
      name: 'Montserrat',
      styles: ['400', '500', '700', '800'],
    },
    {
      name: 'Merriweather',
      styles: ['400'],
    },
  ],
  overrideStyles: () => ({
    'li:last-child': {
      marginBottom: 'auto',
    },
  }),
})

export default typography
