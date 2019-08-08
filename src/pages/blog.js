import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/templates/Layout'
import Header from '../components/organisms/Header'
import Text from '../components/atoms/Text'
import PostItem from '../components/organisms/PostItem'
import Box from '../components/atoms/Box'
import Filter from '../components/atoms/Filter'
import BottomBox from '../components/organisms/Footer/BottomBox'
import { formatBlogPage, formatHeader } from '../utilitity/format'

const ContentFilters = styled.ul`
  ${tw`flex flex-wrap m-auto mt-8 mb-4`}
  list-style: none;
`

const Blog = ({ data, pageContext }) => {
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
  const headerContent = formatHeader(data.header.edges[0])

  useEffect(() => {
    updatePosts()
  }, [currentFilters])

  return (
    <Layout locale={pageContext.locale}>
      <Header content={headerContent} />
      <Box
        width={1}
        pt={[8, 8, 16]}
        maxWidth={1000}
        m="auto"
        px={[6, 6, 12, 16, 24]}
        flex={1}
      >
        <Text
          fontColor="primary.7"
          fontWeight="black"
          fontSize={['3xl', '4xl', '5xl']}
        >
          {pageContent.title}
        </Text>
        <Box>
          <ContentFilters>
            {tags.map(tag => (
              <Filter slug={tag.node.slugs[0]} updateFilter={updateFilter}>
                {tag.node.data.tag}
              </Filter>
            ))}
          </ContentFilters>
          <Box>
            {filteredPosts.length === 0 ? (
              <Text
                display="block"
                fontSize={['base', 'lg']}
                fontColor="primary.3"
                textAlign="center"
                mt={8}
              >
                No articles yet :(
              </Text>
            ) : (
              filteredPosts.map((post, idx) => <PostItem data={post} />)
            )}
          </Box>
        </Box>
      </Box>
      <Box as="footer" width={1} maxWidth={1200} m="auto" px={8} mt={16}>
        <BottomBox variant="secondary" />
      </Box>
    </Layout>
  )
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
