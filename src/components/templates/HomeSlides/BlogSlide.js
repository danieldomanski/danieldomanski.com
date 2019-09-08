import React, { useContext } from 'react'
import { LocalizedLink } from '../../atoms/Link'
import Text from '../../atoms/Text'
import Box from '../../atoms/Box'
import PostItem from '../../organisms/PostItem'
import HomeInfoRow from '../../molecules/HomeInfoRow'
import ArrowButton from '../../atoms/Button/ArrowButton'
import { DirectionalFade } from '../../molecules/AnimatedBox'
import { LocaleContext } from '../../../context/ContentContext'

const BlogSlide = ({ posts, content: { title, description, button } }) => {
  const [locale] = useContext(LocaleContext)

  return (
    <Box
      display={locale === 'en' ? 'none' : 'block'}
      width={1}
      maxWidth={1400}
      m="auto"
      px={[8, 8, 24]}
      py={[16, 16, 20, 24]}
    >
      <HomeInfoRow title={title} description={description} button={button} />
      <Box
        display="flex"
        flexDirection={['column', 'column', 'column', 'column', 'row']}
        justifyContent="space-between"
        as="ul"
        mt={[8, 16, 24]}
        mb={[8, 8, 20]}
      >
        <Text
          display="inline-block"
          fontSize={['base', 'lg', 'lg', 'xl']}
          fontWeight="black"
          fontColor="primary.4"
          style={{ textTransform: 'uppercase' }}
          mt={[8, 0]}
          mb={[0, 0, 12, 12, 0]}
          flex={1}
          textAlign={['left']}
          minWidth={250}
        >
          Ostatnie posty.
        </Text>
        <Box
          display="flex"
          flexDirection="column"
          flex={3}
          mt={[12, 12, 0]}
          mb={[8, 12, 20]}
        >
          {posts.map((post, idx) => (
            <DirectionalFade delay={0.075}>
              <PostItem
                data={post}
                pb={idx === posts.length - 1 ? 0 : [8, 4, 10]}
                pt={idx === 0 ? 0 : [4, 4, 4]}
                mb={idx === posts.length - 1 ? 0 : [4, 4, 10]}
                borderBottom={
                  idx === posts.length - 1
                    ? 'none'
                    : '1px solid rgba(0,0,0,0.05)'
                }
              />
            </DirectionalFade>
          ))}
        </Box>
      </Box>
      <Box textAlign={['left', 'left', 'right']}>
        <LocalizedLink to="/blog" display={['block']}>
          <ArrowButton fontSize={['sm', 'base', 'base']}>{button}</ArrowButton>
        </LocalizedLink>
      </Box>
    </Box>
  )
}

export default BlogSlide
