const locales = require('../config/locales')

const createProjects = (projects, createPage, template) =>
  projects.forEach(edge => {
    const { lang } = edge.node

    const localPrefix = locales[lang].default ? '' : `${locales[lang].path}`
    console.log(`${localPrefix}/projects/${edge.node.uid}`)
    createPage({
      path: `${localPrefix}/projects/${edge.node.uid}`,
      component: template,
      context: {
        uid: edge.node.uid,
        locale: lang,
        data: edge,
      },
    })
  })

const createPosts = (posts, createPage, template) =>
  posts.forEach(edge => {
    const { lang } = edge.node

    const localPrefix = locales[lang].default ? '' : `${locales[lang].path}`

    createPage({
      path: `${localPrefix}/blog/${edge.node.uid}`,
      component: template,
      context: {
        uid: edge.node.uid,
        locale: lang,
        data: edge,
      },
    })
  })

const createTags = (tags, createPage, template) =>
  tags.forEach(edge => {
    const { lang } = edge.node
    const { tag } = edge.node.data
    const slug = edge.node.slugs[0]

    const localPrefix = locales[lang].default ? '' : `${locales[lang].path}`

    createPage({
      path: `${localPrefix}/tags/${slug}`,
      component: template,
      context: {
        uid: edge.node.uid,
        tag,
        locale: lang,
      },
    })
  })

module.exports = { createProjects, createPosts, createTags }
