/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')
const locales = require('./src/config/locales')

const replaceTrailing = _path =>
  _path === `/` ? _path : _path.replace(/\/$/, ``)

const replaceBoth = _path => _path.replace(/^\/|\/$/g, '')

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions

  // Only create one 404 page at /404.html
  if (page.path.includes('404')) {
    return
  }

  // First delete the pages so we can re-create them
  deletePage(page)

  Object.keys(locales).map(lang => {
    // Remove the trailing slash from the path, e.g. --> /blog
    page.path = replaceTrailing(page.path)

    // Remove the leading AND traling slash from path, e.g. --> blog
    const name = replaceBoth(page.path)
    // Create the "slugs" for the pages like in "onCreateNode". Unless default language, add prefix àla "/en"
    const localizedPath = locales[lang].default
      ? page.path
      : `${locales[lang].path}${page.path}`

    return createPage({
      ...page,
      path: localizedPath,
      context: {
        locale: lang,
        name,
      },
    })
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const pages = await graphql(`
    {
      projects: allPrismicProjects {
        edges {
          node {
            id
            uid
            lang
          }
        }
      }
    }
  `)

  const projectTemplate = path.resolve(
    'src/components/templates/Project/index.js'
  )

  pages.data.projects.edges.forEach(edge => {
    const { lang } = edge.node

    const localPrefix = locales[lang].default ? '' : `${locales[lang].path}/`

    createPage({
      path: `/${localPrefix}${edge.node.uid}`,
      component: projectTemplate,
      context: {
        uid: edge.node.uid,
        locale: lang,
      },
    })
  })
}
