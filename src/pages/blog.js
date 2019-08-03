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

const ContentFilters = styled.ul`
  ${tw`flex flex-wrap m-auto my-8`}
  list-style: none;
`

const Blog = ({ data }) => {
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
    <Layout>
      <Header variant="secondary" />
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
          Articles
        </Text>
        <Box>
          <ContentFilters>
            {tags.map((tag, idx) => (
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
              >
                No articles found.
              </Text>
            ) : (
              filteredPosts.map((post, idx) => <PostItem data={post} />)
            )}
          </Box>
        </Box>
      </Box>
      <Box width={1} maxWidth={1200} m="auto" px={8} mt={16}>
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
  }
`
