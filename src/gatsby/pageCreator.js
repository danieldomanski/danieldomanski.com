/* eslint-disable no-nested-ternary */
const locales = require('../config/locales')

const getPostSiblings = (posts, currentSlug) =>
  posts.map(post => {
    const locale = post.node.lang
    const localePosts = posts.filter(p => p.node.lang === locale)

    const idx = localePosts.findIndex(p => p.node.uid === currentSlug)

    const previousIdx = idx - 1 === -1 ? idx + 1 : idx - 1

    const nextIdx =
      idx - 1 === -1 ? idx + 2 : idx + 1 === posts.length ? idx - 2 : idx + 1

    const previous = posts[previousIdx] ? posts[previousIdx] : null
    const next = posts[nextIdx] ? posts[nextIdx] : null

    return { previous, next }
  })

const createProjects = (projects, createPage, template) =>
  projects.forEach(edge => {
    const { lang } = edge.node
    const localPrefix = locales[lang].default ? '' : `${locales[lang].path}`

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
  posts.forEach((edge, idx) => {
    const { lang } = edge.node
    const localPrefix = locales[lang].default ? '' : `${locales[lang].path}`

    const siblings = getPostSiblings(posts, edge.node.uid)

    createPage({
      path: `${localPrefix}/blog/${edge.node.uid}`,
      component: template,
      context: {
        uid: edge.node.uid,
        locale: lang,
        data: { siblings: siblings[idx] },
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
