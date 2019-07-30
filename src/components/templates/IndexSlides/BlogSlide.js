import React from 'react'
import styled from 'styled-components'
import { Link } from '../../atoms/Link'
import Text from '../../atoms/Text'
import Box from '../../atoms/Box'
import SlidableButton from '../../atoms/Button/SlidableButton'
import PostItem from '../../organisms/PostItem'

const BlogPosts = styled.ul`
  ${tw`py-8 md:py-12 text-left`}
  max-width: 800px;
  list-style: none;
`

const BlogSlide = ({ posts }) => (
  <Box maxWidth={1400} m="auto" pb={[24, 24, 64]}>
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      position="relative"
      px={[6, 6, 12, 16, 24]}
      textAlign={['center', 'center', 'left']}
    >
      <Box
        display="flex"
        justifyContent={['center', 'center', 'space-between']}
        alignItems="center"
        mb={[4, 4, 8]}
      >
        <Text
          fontSize={['4xl', '4xl', '6xl']}
          fontColor="primary.7"
          fontWeight="black"
        >
          Blog.
        </Text>
        <Link to="/projects" display={['none', 'none', 'block']}>
          <SlidableButton>view all projects</SlidableButton>
        </Link>
      </Box>
      <Text
        fontFamily="sans"
        fontColor="primary.6"
        fontSize={['base', 'lg']}
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
      <Box display={['flex', 'flex', 'none']} mt={12} justifyContent="center">
        <Link to="/blog">
          <SlidableButton>view all posts</SlidableButton>
        </Link>
      </Box>
    </Box>
  </Box>
)

export default BlogSlide
