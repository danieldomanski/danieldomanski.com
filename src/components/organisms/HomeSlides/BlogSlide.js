import React, { useContext } from 'react'
import Text from '../../atoms/Text'
import Box from '../../atoms/Box'
import PostItem from '../PostItem'
import Slide from '../../templates/Slide'
import { DirectionalFade } from '../../molecules/AnimatedBox'
import { LocaleContext } from '../../../context/ContentContext'

const BlogSlide = ({ posts, content }) => {
  const [locale] = useContext(LocaleContext)
  const anyPostsReady = posts.some(post => post.node.data.released !== 0)

  return locale === 'en' || !anyPostsReady ? null : (
    <Slide content={content} to="/blog">
      <Box
        display="flex"
        flexDirection={['column', 'column', 'column', 'column', 'row']}
        justifyContent="space-between"
        mt={[12, 12, 12, 12, 20]}
        mt={[12, 12, 12, 12, 20]}
      >
        <Text
          fontSize={['base', 'lg', 'lg', 'xl']}
          fontWeight="black"
          fontColor="primary.4"
          style={{ textTransform: 'uppercase' }}
          mb={[8, 8, 12, 12, 12]}
          flex={1}
        >
          Ostatnie posty.
        </Text>
        <Box display="flex" flexDirection="column" flex={3}>
          <DirectionalFade>
            {posts.map((post, idx) => (
              <PostItem
                data={post}
                pb={idx === posts.length - 1 ? 0 : [6, 6, 6]}
                pt={idx === 0 ? 0 : [6, 6, 6]}
              />
            ))}
          </DirectionalFade>
        </Box>
      </Box>
    </Slide>
  )
}

export default BlogSlide
