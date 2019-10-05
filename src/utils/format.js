/* eslint-disable camelcase */
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

export const formatAboutText = aboutText =>
  aboutText.map(g => ({
    title: g.text_title.text,
    description: g.text_description.html,
  }))

export const formatAbout = about => ({
  title: about.title.text,
  aboutMe: about.about_me.text,
  aboutGroup: formatAboutGroup(about.about_group),
  aboutText: formatAboutText(about.about_text),
})

export const formatHome = home => {
  const {
    about_title,
    about_description,
    about_button,
    blog_title,
    blog_description,
    blog_button,
    process_rows,
    process_details,
    hero_title,
    hero_description,
    works_title,
    works_description,
    works_button,
    work_with_me_title,
    work_with_me_subtitle,
    work_with_me_description,
  } = home.node.data

  return {
    hero: {
      title: hero_title.text,
      description: hero_description.html,
    },
    about: {
      title: about_title.text,
      description: about_description.text,
      button: about_button.text,
      processRows: process_rows.map(row => ({
        title: row.title.text,
        description: row.description.text,
      })),
      processDetails: process_details.text,
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
    workWithMe: {
      title: work_with_me_title.html,
      subtitle: work_with_me_subtitle.html,
      description: work_with_me_description.html,
    },
  }
}

export const format404 = notFoundPage => {
  const { title, subtitle, description } = notFoundPage.node.data

  return {
    title: title.html,
    subtitle: subtitle.html,
    description: description.html,
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

export const formatFooter = footer => {
  const { code_availability } = footer.node.data

  return {
    codeAvailability: code_availability.text,
  }
}

export const formatWorksPage = projects => {
  const { page_title } = projects.node.data

  return {
    title: page_title.text,
  }
}

export const formatSingleProjectPage = singleProjectPage => {
  const {
    role,
    technologies,
    client,
  } = singleProjectPage.node.data.body[0].items[0]

  return {
    title: '',
    description: '',
    role: role.text,
    technologies: technologies.text,
    client: client.text,
  }
}

export const formatBlogsPage = blogs => {
  const { page_title } = blogs.node.data

  return {
    title: page_title.text,
  }
}

export const formatPostPage = post => {
  const { title, description } = post

  return {
    title: title.text,
    description: description.text,
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

  contextKeys.forEach(key => {
    switch (key) {
      case 'home':
        data = { home: formatHome(context.home.edges[0]), ...data }
        break
      case 'header':
        data = { header: formatHeader(context.header.edges[0]), ...data }
        break
      case 'footer':
        data = { footer: formatFooter(context.footer.edges[0]), ...data }
        break
      case 'notFoundPage':
        data = {
          notFoundPage: format404(context.notFoundPage.edges[0]),
          ...data,
        }
        break
      case 'blogPage':
        data = {
          blogsPage: formatBlogsPage(context.blogPage.edges[0]),
          ...data,
        }
        break
      case 'worksPage':
        data = {
          worksPage: formatWorksPage(context.worksPage.edges[0]),
          ...data,
        }
        break
      case 'prismicPost':
        data = {
          postPage: formatPostPage(context.prismicPost.data),
          ...data,
        }
        break
      case 'about':
        data = {
          aboutPage: formatAbout(context.about.data),
          ...data,
        }
        break

      case 'projectPage':
        data = {
          projectPage: {
            ...formatSingleProjectPage(context.projectPage.edges[0]),
            title: context.prismicProjects.data.title.text,
            description: context.prismicProjects.data.description.text,
            liveAdress: context.prismicProjects.data.live_adress,
          },
          ...data,
        }
        break
      default:
        break
    }
  })
  return data
}
