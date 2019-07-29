import React from 'react'
import styled from 'styled-components'
import { Link } from '../../atoms/Link'
import Text from '../../atoms/Text'
import Box from '../../atoms/Box'
import SlidableButton from '../../atoms/Button/SlidableButton'
import PostItem from '../../organisms/PostItem'

const BlogPosts = styled.ul`
  ${tw`py-12`}
  max-width: 800px;
  list-style: none;
`

const BlogSlide = ({ posts }) => (
  <Box maxWidth={1400} m="auto" pb={64} px={[8, 8, 12, 16, 24]}>
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      position="relative"
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={8}
      >
        <Text fontSize="6xl" fontColor="primary.7" fontWeight="black">
          Blog.
        </Text>
        <Link to="/blog">
          <SlidableButton>view all posts</SlidableButton>
        </Link>
      </Box>
      <Text
        fontFamily="sans"
        fontSize="lg"
        fontColor="primary.6"
        lineHeight="relaxed"
        maxWidth={900}
      >
        Learning new things is an integral part of every software engineer on a
        daily basis. Something that always characterized our industry is broad
        access to free resources. Learning in public is my way to give back some
        value to the community.
      </Text>
      <BlogPosts>
        <Text fontSize="base" fontColor="primary.8" fontWeight="bold">
          Latest posts.
        </Text>
        {posts.map((post, idx) => (
          <PostItem data={post} />
        ))}
      </BlogPosts>
    </Box>
  </Box>
)

export default BlogSlide
