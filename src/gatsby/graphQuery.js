const graphQuery = `
  projects: allPrismicProjects {
    edges {
      node {
        lang
        uid
        data {
          title {
            text
          }
          description {
            text
          }
        }
      }
    }
  }
  posts: allPrismicPost {
    edges {
      node {
        first_publication_date
        lang
        uid
        last_publication_date
        data {
          title {
            text
          }
          description {
            text
          }
          released
          tags {
            tag {
              slug
              uid
            }
          }
          category {
            slug
          }
          icon {
            text
          }
        }
      }
    }
  }
  tags: allPrismicTag {
    edges {
      node {
        lang
        uid
        slugs
        data {
          tag
        }
      }
    }
  }
`

module.exports = graphQuery
