require('dotenv').config({
  path: `.env`,
})

const config = require('./src/config/website')
const prismicHtmlSerializer = require('./src/gatsby/htmlSerializer')

module.exports = {
  siteMetadata: {
    siteTitle: config.siteTitle,
    siteDescription: config.siteDescription,
    siteShortName: config.siteShortName,
    siteUrl: config.siteUrl,
    siteHeadline: config.siteHeadline,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(
          `./src/components/templates/Layout/index.js`
        ),
      },
    },
    'gatsby-plugin-tailwindcss',
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        displayName: process.env.NODE_ENV !== 'production',
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: `${__dirname}/src/config/typography.js`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: config.googleAnalyticsID,
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        exclude: ['/en/offline-plugin-app-shell-fallback'],
      },
    },
    'gatsby-plugin-catch-links',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.siteTitle,
        short_name: config.siteShortName,
        start_url: '/',
        lang: 'pl-PL',
        background_color: '#656565',
        theme_color: '#222',
        display: 'standalone',
        icons: [
          {
            src: `/favicons/icons-192.png`,
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: `/favicons/icons-512.png`,
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `gatsby-blog-test`,
        accessToken: `${process.env.PRISMIC_API_KEY}`,
        // PrismJS highlighting for labels and slices
        htmlSerializer: () => prismicHtmlSerializer,
      },
    },
    'gatsby-plugin-offline',
  ],
}
