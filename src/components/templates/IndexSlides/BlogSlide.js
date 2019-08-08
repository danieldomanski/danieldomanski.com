import React from 'react'
import styled from 'styled-components'
import { LocalizedLink } from '../../atoms/Link'
import Text from '../../atoms/Text'
import Box from '../../atoms/Box'
import SlidableButton from '../../atoms/Button/SlidableButton'
import PostItem from '../../organisms/PostItem'
import Icon from '../../atoms/Icon'

const BlogSlide = ({ posts, content }) => (
  <Box
    display="flex"
    flexDirection="column"
    justifyContent="center"
    position="relative"
    px={[6, 6, 12, 16, 24]}
    maxWidth={1400}
    m="auto"
    pb={[24, 24, 64]}
  >
    <Box
      display="flex"
      justifyContent={['space-between']}
      alignItems="center"
      mb={[4, 4, 8]}
    >
      <Text
        fontSize={['4xl', '4xl', '5xl']}
        fontColor="primary.8"
        fontWeight="black"
      >
        {content.title}
      </Text>
      <LocalizedLink to="/blog" display={['none', 'none', 'block']}>
        <SlidableButton>{content.button}</SlidableButton>
      </LocalizedLink>
      <LocalizedLink to="/blog" display={['block', 'block', 'none']}>
        <Box display={['flex', 'flex', 'none']} alignItems="center">
          <Text
            fontFamily="sans"
            fontSize="base"
            fontColor="accent.7"
            fontWeight="bold"
          >
            {content.button}
          </Text>
          <Icon icon="caret" width={7} fill="#2E73FF" ml={2} />
        </Box>
      </LocalizedLink>
    </Box>
    <Text
      fontFamily="sans"
      fontColor="primary.6"
      fontSize={['base', 'lg']}
      lineHeight="relaxed"
      maxWidth={900}
    >
      {content.description}
    </Text>
    <Box as="ul" maxWidth={800} py={[8, 8, 12]}>
      <Text fontSize="base" fontColor="primary.8" fontWeight="bold" mb={4}>
        Latest posts.
      </Text>
      {posts.map((post, idx) => (
        <PostItem data={post} />
      ))}
    </Box>
  </Box>
)

export default BlogSlide
