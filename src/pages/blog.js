import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import Text from '../components/atoms/Text'
import PostItem from '../components/organisms/PostItem'
import Box from '../components/atoms/Box'
import Filter from '../components/atoms/Filter'
import BottomBox from '../components/organisms/Footer/BottomBox'
import { formatBlogPage } from '../utilitity/format'
import { usePageContent } from '../context/ContentContext'
import UnderlineText from '../components/atoms/UnderlineText'
import FadeIn from '../components/molecules/AnimatedBox/FadeIn'

const Blog = ({ data }) => {
  if (typeof window !== `undefined`) {
    usePageContent(data)
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

    const pageContent = formatBlogPage(data.blogPage.edges[0])

    useEffect(() => {
      updatePosts()
    }, [currentFilters])

    return (
      <FadeIn>
        <Box
          width={1}
          pb={[8, 8, 16]}
          maxWidth={760}
          m={[0, 0, 'auto', 'auto', 'auto']}
          px={[8, 8, 12, 12, 0, 0]}
          flex={1}
        >
          <UnderlineText>{pageContent.title}</UnderlineText>
          <Box display="flex" flexDirection="column" my={[8, 8, 10, 10, 12]}>
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
                  pb={idx === posts.length - 1 ? 0 : [8, 4, 10]}
                  pt={idx === 0 ? 0 : [4, 4, 4]}
                  mb={idx === posts.length - 1 ? 0 : [4, 4, 10]}
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
