require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'ddomanski.dev',
  },
  plugins: [
    'gatsby-plugin-tailwindcss',
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        displayName: process.env.NODE_ENV !== 'production',
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Playfair Display'],
        },
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
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
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `gatsby-blog-test`,
        accessToken: `${process.env.PRISMIC_API_KEY}`,
      },
    },
    'gatsby-plugin-offline',
  ],
}
