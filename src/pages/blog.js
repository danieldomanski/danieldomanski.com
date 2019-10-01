import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import Box from '../components/atoms/Box'
import Title from '../components/atoms/Text/Title'
import Footer from '../components/organisms/Footer'
import Filter from '../components/atoms/Filter'
import PostsContainer from '../components/organisms/PostsContainer'
import FadeIn from '../components/molecules/AnimatedBox/FadeIn'
import { usePageContent } from '../context/ContentContext'

const Blog = ({ data }) => {
  if (typeof window !== `undefined`) {
    const content = usePageContent(data)

    const [currentFilters, setFilters] = useState([])
    const [filteredPosts, filterPosts] = useState(data.posts.edges)
    const [tags] = useState(data.tags.edges)
    const [posts] = useState(data.posts.edges)

    const updateFilter = filter => {
      if (!currentFilters.includes(filter)) {
        setFilters([...currentFilters, filter])
      } else {
        setFilters(currentFilters.filter(name => name !== filter))
      }
    }

    const updatePosts = () => {
      filterPosts(
        posts.filter(post => {
          const postTags = post.node.data.tags.map(item => item.tag.slug)
          const { released } = post.node.data

          return (
            currentFilters.every(filter => postTags.includes(filter)) &&
            released !== 0
          )
        })
      )
    }

    useEffect(() => {
      updatePosts()
    }, [currentFilters])

    return (
      <>
        <FadeIn>
          <Box
            width={1}
            maxWidth={760}
            m={[0, 0, 'auto', 'auto', 'auto']}
            px={[8, 8, 12, 12, 0, 0]}
            pb={[16, 20, 24, 24, 32]}
            flexGrow={1}
          >
            <Title>{content.blogsPage.title}</Title>
            <Box display="flex" flexDirection="column" mb={[8, 12, 16, 16, 24]}>
              <Box
                as="ul"
                display="flex"
                flexWrap="wrap"
                justifyContent={['flex-start', 'flex-start', 'center']}
              >
                {tags.map(tag => (
                  <Filter slug={tag.node.slugs[0]} updateFilter={updateFilter}>
                    {tag.node.data.tag}
                  </Filter>
                ))}
              </Box>
            </Box>
            <PostsContainer posts={filteredPosts} />
          </Box>
        </FadeIn>
        <Box as="footer" width={1} mt="auto">
          <Footer variant="secondary" />
        </Box>
      </>
    )
  }

  return null
}

export default Blog

export const pageQuery = graphql`
  query PostsQuery($locale: String!) {
    posts: allPrismicPost(filter: { lang: { eq: $locale } }) {
      edges {
        node {
          uid
          first_publication_date
          last_publication_date
          data {
            title {
              text
            }
            tags {
              tag {
                document {
                  href
                  slugs
                  data {
                    tag
                  }
                }
                slug
              }
            }
            description {
              text
            }
            released
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
          slugs
          data {
            tag
          }
        }
      }
    }
    blogPage: allPrismicBlogpage(filter: { lang: { eq: $locale } }) {
      edges {
        node {
          data {
            page_title {
              text
            }
          }
        }
      }
    }
    footer: allPrismicFooter(filter: { lang: { eq: $locale } }) {
      edges {
        node {
          data {
            code_availability {
              text
            }
          }
        }
      }
    }
    header: allPrismicHeader(filter: { lang: { eq: $locale } }) {
      edges {
        node {
          data {
            brand {
              text
            }
            nav_home {
              text
            }
            nav_projects {
              text
            }
            nav_about {
              text
            }
            nav_articles {
              text
            }
          }
        }
      }
    }
  }
`
