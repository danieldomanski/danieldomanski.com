const locales = require('../config/locales')

const createProjects = (projects, createPage, template) =>
  projects.forEach(edge => {
    const { lang } = edge.node

    const localPrefix = locales[lang].default ? '' : `${locales[lang].path}/`

    createPage({
      path: `/${localPrefix}${edge.node.uid}`,
      component: template,
      context: {
        uid: edge.node.uid,
        locale: lang,
        data: edge,
      },
    })
  })

module.exports = { createProjects }
