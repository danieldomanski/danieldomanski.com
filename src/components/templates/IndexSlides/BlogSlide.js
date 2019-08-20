import React from 'react'
import styled from 'styled-components'
import { LocalizedLink } from '../../atoms/Link'
import Text from '../../atoms/Text'
import Box from '../../atoms/Box'
import PostItem from '../../organisms/PostItem'
import HomeInfoRow from '../../molecules/HomeInfoRow'
import ArrowButton from '../../atoms/Button/ArrowButton'
import { DirectionalFade } from '../../molecules/AnimatedBox'

const BlogSlide = ({ posts, content: { title, description, button } }) => (
  <Box
    width={1}
    maxWidth={1400}
    m="auto"
    pt={[8, 16, 48, 64]}
    pb={[16, 24, 48]}
    px={[8, 8, 12]}
  >
    <HomeInfoRow
      title={title}
      description={description}
      button={button}
      idx={3}
    />
    <Box
      display="flex"
      flexDirection={['column', 'column', 'row']}
      justifyContent="space-between"
      as="ul"
    >
      <Text
        fontFamily="sans"
        fontSize={['lg', 'lg', 'xl']}
        fontColor="primary.4"
        fontWeight="bold"
        minWidth={250}
        mr={[16, 16, 16, 32]}
        mb={[8, 8, 0]}
      >
        Ostatnie posty.
      </Text>
      <Box display="flex" flexDirection="column" maxWidth={920} flex={1}>
        {posts.map((post, idx) => (
          <DirectionalFade delay={0.075}>
            <PostItem
              data={post}
              pb={8}
              mb={idx === posts.length - 1 ? 0 : 8}
              borderBottom={
                idx === posts.length - 1 ? 'none' : '1px solid rgba(0,0,0,0.05)'
              }
            />
          </DirectionalFade>
        ))}
      </Box>
    </Box>
    <Box textAlign={['left', 'left', 'right']} my={[12, 16, 20]}>
      <LocalizedLink to="/blog" display={['block']}>
        <ArrowButton fontColor="primary.2" fontSize={['sm', 'base', 'lg']}>
          {button}
        </ArrowButton>
      </LocalizedLink>
    </Box>
  </Box>
)

export default BlogSlide
