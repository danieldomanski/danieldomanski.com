module.exports = {
  siteMetadata: {
    title: 'Gatsby Tailwind Styled Components Starter',
  },
  plugins: [
    'gatsby-plugin-tailwindcss',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'ddev',
        short_name: 'ddev',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/favicon.ico',
      },
    },
    'gatsby-plugin-offline',
  ],
}
