import React, { useContext } from 'react'
import Text from '../../atoms/Text'
import Box from '../../atoms/Box'
import PostItem from '../PostItem'
import Slide from '../../templates/Slide'
import { LocaleContext } from '../../../context/ContentContext'

const BlogSlide = ({ posts, content }) => {
  const [locale] = useContext(LocaleContext)
  const anyPostReady = posts.some(post => post.node.data.released !== 0)

  return locale === 'en' || !anyPostReady ? null : (
    <Slide content={content} to="/blog">
      <Box
        display="flex"
        flexDirection={['column', 'column', 'column', 'column', 'row']}
        justifyContent="space-between"
      >
        <Text
          fontSize={['lg', 'lg', 'lg', 'xl']}
          fontWeight="black"
          fontColor="primary.4"
          style={{ textTransform: 'uppercase' }}
          mb={[8, 8, 12, 12, 12]}
          flex={1}
          lineHeight="loose"
        >
          Ostatnie posty.
        </Text>
        <Box display="inline-block" flexDirection="column" flex={3}>
          {posts.map((post, idx) => (
            <PostItem
              post={post}
              pb={idx === posts.length - 1 ? 0 : 6}
              pt={idx === 0 ? 0 : 6}
            />
          ))}
        </Box>
      </Box>
    </Slide>
  )
}

export default BlogSlide
