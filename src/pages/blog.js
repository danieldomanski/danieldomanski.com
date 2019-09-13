import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import Text from '../components/atoms/Text'
import PostItem from '../components/organisms/PostItem'
import Box from '../components/atoms/Box'
import Filter from '../components/atoms/Filter'
import BottomBox from '../components/organisms/Footer/BottomBox'
import { formatBlogPage } from '../utils/format'
import { usePageContent } from '../context/ContentContext'
import UnderlineText from '../components/atoms/UnderlineText'
import FadeIn from '../components/molecules/AnimatedBox/FadeIn'

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

          return currentFilters.every(filter => postTags.includes(filter))
        })
      )
    }

    useEffect(() => {
      updatePosts()
    }, [currentFilters])

    return (
      <FadeIn>
        <Box
          width={1}
          maxWidth={760}
          m={[0, 0, 'auto', 'auto', 'auto']}
          px={[8, 8, 12, 12, 0, 0]}
          pb={[12, 16, 20, 24, 24, 32]}
          flexGrow={1}
        >
          <UnderlineText>{content.blogsPage.title}</UnderlineText>
          <Box display="flex" flexDirection="column" mb={[10, 10, 10, 16, 16]}>
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
          <Box minHeight={520} pb={[12]}>
            {filteredPosts.length === 0 ? (
              <Text
                display="block"
                fontSize={['base', 'lg']}
                fontColor="primary.3"
                textAlign="center"
              >
                No articles yet :(
              </Text>
            ) : (
              filteredPosts.map((post, idx) => (
                <PostItem
                  data={post}
                  pb={idx === posts.length - 1 ? 0 : [8, 4, 8]}
                  pt={idx === 0 ? 0 : [4, 4, 8]}
                  mb={idx === posts.length - 1 ? 0 : [4, 4, 8]}
                  borderBottom={
                    idx === posts.length - 1
                      ? 'none'
                      : '1px solid rgba(0,0,0,0.05)'
                  }
                />
              ))
            )}
          </Box>
        </Box>
        <Box as="footer" width={1} m="auto">
          <BottomBox variant="secondary" />
        </Box>
      </FadeIn>
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
                slug
              }
            }
            description {
              text
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
