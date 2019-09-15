const graphQuery = `
  projects: allPrismicProjects {
    edges {
      node {
        lang
        uid
        data {
          body {
            ... on PrismicProjectsBodyDetail {
              slice_type
              id
              primary {
                detailtitle {
                  text
                }
                detaildescription1 {
                  text
                }
                image {
                  localFile {
                    childImageSharp {
                      fluid(maxWidth: 1200, quality: 90){
                        src
                      }
                    }
                  }
                }
              }
            }
            ... on PrismicProjectsBodyImage {
              slice_type
              id
              primary {
                image {
                  alt
                  url
                  localFile {
                    childImageSharp {
                      fluid(maxWidth: 1200, quality: 90){
                        src
                      }
                    }
                  }
                }
              }
            }
          }
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
