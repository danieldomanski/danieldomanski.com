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
    pt={[12, 16, 48, 16]}
    pb={[24, 24, 24, 64]}
    px={[6, 8, 12, 12, 16, 16]}
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
        mr={[4, 8, 8, 16, 32]}
        mb={[8, 8, 0]}
      >
        Ostatnie posty.
      </Text>
      <Box display="flex" flexDirection="column" maxWidth={920} flex={1}>
        {posts.map((post, idx) => (
          <DirectionalFade delay={0.075}>
            <PostItem
              data={post}
              pb={idx === posts.length - 1 ? 0 : 6}
              mb={idx === posts.length - 1 ? 0 : 6}
              borderBottom={
                idx === posts.length - 1 ? 'none' : '1px solid rgba(0,0,0,0.05)'
              }
            />
          </DirectionalFade>
        ))}
      </Box>
    </Box>
    <Box textAlign={['center', 'left', 'right']} mt={[12, 16, 24]}>
      <LocalizedLink to="/blog" display={['block']}>
        <ArrowButton fontColor="cosmic.2" fontSize={['sm', 'base', 'base']}>
          {button}
        </ArrowButton>
      </LocalizedLink>
    </Box>
  </Box>
)

export default BlogSlide
