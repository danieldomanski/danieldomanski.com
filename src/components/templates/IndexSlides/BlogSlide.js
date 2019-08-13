import React from 'react'
import styled from 'styled-components'
import { LocalizedLink } from '../../atoms/Link'
import Text from '../../atoms/Text'
import Box from '../../atoms/Box'
import SlidableButton from '../../atoms/Button/SlidableButton'
import PostItem from '../../organisms/PostItem'
import Icon from '../../atoms/Icon'
import HomeInfoRow from '../../molecules/HomeInfoRow'
import ArrowButton from '../../atoms/Button/ArrowButton'

const BlogSlide = ({ posts, content: { title, description, button } }) => (
  <Box
    width={1}
    maxWidth={1480}
    m="auto"
    pt={[16, 24, 64]}
    pb={[16, 24, 64]}
    px={[6, 6, 12, 16, 24]}
  >
    <HomeInfoRow
      title={title}
      description={description}
      button={button}
      idx={3}
    />
    <Box as="ul" maxWidth={800}>
      <Text
        fontFamily="sans"
        fontSize="base"
        fontColor="primary.6"
        fontWeight="bold"
        mb={6}
      >
        Ostatnie posty.
      </Text>
      {posts.map((post, idx) => (
        <PostItem data={post} />
      ))}
    </Box>
    <Box textAlign="right" mt={24}>
      <LocalizedLink to="/blog" display={['none', 'none', 'block']}>
        <ArrowButton fontColor="primary.7">{button}</ArrowButton>
      </LocalizedLink>
    </Box>
  </Box>
)

export default BlogSlide
