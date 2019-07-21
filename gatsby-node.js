/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')
const locales = require('./src/config/locales')
const graphQuery = require('./src/gatsby/graphQuery')
const { createProjects, createPosts } = require('./src/gatsby/pageCreator')

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

  // required data to create each page
  const result = await graphql(`
    {
      ${graphQuery}
    }
    `)

  // templates
  const projectTemplate = path.resolve(
    'src/components/templates/Project/index.js'
  )
  const postTemplate = path.resolve('src/components/templates/Post/index.js')

  createProjects(result.data.projects.edges, createPage, projectTemplate)
  createPosts(result.data.posts.edges, createPage, postTemplate)
}
