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
    blog_title,
    blog_description,
    body,
    hero_title,
    hero_description,
    works_title,
    works_description,
  } = home.node.data

  const header = body.find(s => s.slice_type === 'header').primary
  const footer = body.find(s => s.slice_type === 'footer').primary

  return {
    about: {
      title: about_title.text,
      description: about_description.text,
    },
    blog: {
      title: blog_title.text,
      description: blog_description.text,
    },
    hero: {
      title: hero_title.text,
      description: hero_description.text,
    },
    works: {
      title: works_title.text,
      description: works_description.text,
    },
    header: {
      brand: header.brand.text,
      nav: {
        about: header.nav_about.text,
        articles: header.nav_articles.text,
        home: header.nav_home.text,
        projects: header.nav_projects.text,
      },
    },
    footer: {
      upperTitle: footer.upper_title.text,
      upperDescription: footer.upper_description.text,
    },
  }
}
