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
import { DirectionalFade } from '../../molecules/AnimatedBox'

const BlogSlide = ({ posts, content: { title, description, button } }) => (
  <Box
    width={1}
    maxWidth={1600}
    m="auto"
    pt={[16, 24, 32]}
    pb={[16, 24, 64]}
    px={[6, 6, 12, 16, 24]}
  >
    <HomeInfoRow
      title={title}
      description={description}
      button={button}
      idx={3}
    />
    <Box as="ul" maxWidth={1024}>
      <Text
        fontFamily="sans"
        fontSize="xl"
        fontColor="primary.6"
        fontWeight="bold"
        mb={8}
      >
        Ostatnie posty.
      </Text>

      {posts.map((post, idx) => (
        <DirectionalFade delay={0.075}>
          <PostItem data={post} />
        </DirectionalFade>
      ))}
    </Box>
    <DirectionalFade direction="right">
      <Box textAlign="right" mt={24}>
        <LocalizedLink to="/blog" display={['none', 'none', 'block']}>
          <ArrowButton fontColor="primary.10" fontSize="lg">
            {button}
          </ArrowButton>
        </LocalizedLink>
      </Box>
    </DirectionalFade>
  </Box>
)

export default BlogSlide
