/* eslint-disable import/prefer-default-export */
export const formatInvolvment = roles =>
  roles.map(role => role.involvment.document[0].data.involvment.text)

export const formatAboutGroup = aboutGroup =>
  aboutGroup.map(g => {
    const rows = g.rows1.document[0].data.group.map(r => ({
      name: r.row.document[0].data.name.text,
      value: r.row.document[0].data.value.text,
    }))

    return { title: g.group_title.text, rows }
  })

export const formatHome = home => {
  const {
    about_title,
    about_description,
    about_button,
    blog_title,
    blog_description,
    blog_button,
    body,
    hero_title,
    hero_description,
    works_title,
    works_description,
    works_button,
  } = home.node.data

  const footer = body.find(s => s.slice_type === 'footer').primary

  return {
    hero: {
      title: hero_title.text,
      description: hero_description.text,
    },
    about: {
      title: about_title.text,
      description: about_description.text,
      button: about_button.text,
    },
    blog: {
      title: blog_title.text,
      description: blog_description.text,
      button: blog_button.text,
    },
    works: {
      title: works_title.text,
      description: works_description.text,
      button: works_button.text,
    },
    footer: {
      title: footer.upper_title.text,
      description: footer.upper_description.text,
    },
  }
}

export const formatHeader = header => {
  const {
    brand,
    nav_about,
    nav_articles,
    nav_home,
    nav_projects,
  } = header.node.data

  return {
    brand: brand.text,
    nav: {
      about: nav_about.text,
      articles: nav_articles.text,
      home: nav_home.text,
      projects: nav_projects.text,
    },
  }
}

export const formatProjectsPage = projects => {
  const { page_title } = projects.node.data

  return {
    title: page_title.text,
  }
}

export const formatBlogPage = blog => {
  const { page_title } = blog.node.data

  return {
    title: page_title.text,
  }
}

export const formatUrlToLocale = url =>
  url.split('/')[1] === 'en' ? 'en-pl' : 'pl'

export const formatRawDataToContext = context => {
  const contextKeys = Object.keys(context)
  let data = {}

  contextKeys.map(key => {
    switch (key) {
      case 'home':
        data = { home: formatHome(context.home.edges[0]), ...data }
        break
      case 'header':
        data = { header: formatHeader(context.header.edges[0]), ...data }
        break
      default:
        return data
    }
  })

  return data
}
