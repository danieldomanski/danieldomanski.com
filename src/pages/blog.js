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

const Line = styled.span`
  ${tw`mt-2 md:mt-4`}
  display: block;
  width: 80px;
  height: 4px;
  background-color: #181818;
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
        pb={[4, 8, 16]}
        maxWidth={800}
        m={[0, 0, 0, 0, 'auto']}
        px={[6, 8, 12, 12, 0, 0]}
        flex={1}
      >
        <Box>
          <Text
            display="block"
            fontFamily="sans"
            fontColor="primary.10"
            fontWeight="black"
            fontSize={['3xl', '4xl', '5xl']}
          >
            {pageContent.title}
            <Line />
          </Text>
        </Box>
        <Box my={[8, 8, 12]}>
          <Text
            lineHeight="relaxed"
            fontColor="primary.5"
            fontSize={['base', 'sm', 'lg']}
            style={{ fontStyle: 'italic' }}
          >
            “You already know that you will never be done learning. But most
            people "learn in private", and lurk. They consume content without
            creating any themselves. Whatever your thing is, make the thing you
            wish you had found when you were learning. The biggest beneficiary
            of you trying to help past you is future you. If others benefit,
            that's icing.”
          </Text>
          <Text
            display="block"
            textAlign="right"
            fontFamily="sans"
            fontSize={['sm', 'base', 'lg']}
            fontWeight="bold"
            fontColor="primary.10"
            mt={[6, 4]}
          >
            learn in public, swyx.io
          </Text>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent={['flex-start', 'flex-start', 'center']}
        >
          <Box as="ul" display="flex" flexWrap="wrap" mt={[8, 8, 16]} mb={6}>
            {tags.map(tag => (
              <Filter slug={tag.node.slugs[0]} updateFilter={updateFilter}>
                {tag.node.data.tag}
              </Filter>
            ))}
          </Box>
          <Box>
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
                  pb={6}
                  mb={6}
                  borderBottom={
                    idx === filteredPosts.length - 1
                      ? 'none'
                      : '1px solid rgba(0,0,0,0.05)'
                  }
                />
              ))
            )}
          </Box>
        </Box>
      </Box>
      <Box as="footer" width={1} m="auto" px={[8, 8, 24]} mt={8}>
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
