import React, { useContext } from 'react'
import Text from '../../atoms/Text'
import Box from '../../atoms/Box'
import PostItem from '../PostItem'
import Slide from '../../templates/Slide'
import { LocaleContext } from '../../../context/ContentContext'
import PostsContainer from '../PostsContainer'

const BlogSlide = ({ posts, content }) => {
  const [locale] = useContext(LocaleContext)
  const anyPostReady = posts.some(post => post.node.data.released !== 0)

  return locale === 'en' || !anyPostReady ? null : (
    <Slide content={content} id="blog" to="/blog">
      <Box
        display="flex"
        flexDirection={['column', 'column', 'column', 'column', 'row']}
        justifyContent="space-between"
      >
        <Text
          fontSize={['lg', 'lg', 'xl', '2xl']}
          fontWeight="bold"
          fontColor="primary.4"
          mb={[4, 4, 8, 12, 12]}
          flex={1}
          lineHeight="loose"
        >
          Ostatnie posty.
        </Text>
        <Box display="inline-block" flexDirection="column" flex={3}>
          <PostsContainer posts={posts}></PostsContainer>
        </Box>
      </Box>
    </Slide>
  )
}

export default BlogSlide
