import React, { useContext } from 'react'
import Text from '../../atoms/Text'
import Box from '../../atoms/Box'
import PostItem from '../PostItem'
import Slide from '../../templates/Slide'
import { DirectionalFade } from '../../molecules/AnimatedBox'
import { LocaleContext } from '../../../context/ContentContext'

const BlogSlide = ({ posts, content }) => {
  const [locale] = useContext(LocaleContext)

  return locale === 'en' ? null : (
    <Slide content={content} to="/blog">
      <Box
        display="flex"
        flexDirection={['column', 'column', 'column', 'column', 'row']}
        justifyContent="space-between"
        mt={[12, 16, 24]}
        mb={[12, 12, 24]}
      >
        <Text
          fontSize={['base', 'lg', 'lg', 'xl']}
          fontWeight="black"
          fontColor="primary.4"
          style={{ textTransform: 'uppercase' }}
          mb={[8, 8, 12, 12, 12]}
          flexGrow={1}
        >
          Ostatnie posty.
        </Text>
        <Box display="flex" flexDirection="column" flexGrow={3}>
          <DirectionalFade>
            {posts.map((post, idx) => (
              <PostItem
                data={post}
                pb={idx === posts.length - 1 ? 0 : [8, 8, 8]}
                pt={idx === 0 ? 0 : [8, 8, 8]}
                borderBottom={
                  idx === posts.length - 1
                    ? 'none'
                    : '1px solid rgba(0,0,0,0.05)'
                }
              />
            ))}
          </DirectionalFade>
        </Box>
      </Box>
    </Slide>
  )
}

export default BlogSlide
