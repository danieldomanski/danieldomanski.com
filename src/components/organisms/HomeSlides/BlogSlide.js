import React, { useContext } from 'react'
import Text from '../../atoms/Text'
import Box from '../../atoms/Box'
import Slide from '../../templates/Slide'
import { LocaleContext } from '../../../context/ContentContext'
import PostsContainer from '../PostsContainer'
import Subtitle from '../../atoms/Text/Subtitle'

const BlogSlide = ({ posts, content, ...rest }) => {
  const [locale] = useContext(LocaleContext)
  const anyPostReady = posts.some(post => post.node.data.released !== 0)

  return locale === 'en' || !anyPostReady ? null : (
    <Slide content={content} id="blog" to="/blog">
      <Box
        display="flex"
        flexDirection={['column', 'column', 'column', 'column', 'row']}
        justifyContent="space-between"
      >
        <Subtitle>Ostatnie posty.</Subtitle>
        <Box display="inline-block" flexDirection="column" flex={3}>
          <PostsContainer posts={posts}></PostsContainer>
        </Box>
      </Box>
    </Slide>
  )
}

export default BlogSlide
