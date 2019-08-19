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
    pt={[16, 24, 32]}
    pb={[16, 24, 64]}
    px={[6, 6, 12, 0, 0]}
  >
    <HomeInfoRow
      title={title}
      description={description}
      button={button}
      idx={3}
    />
    <Box display="flex" justifyContent="space-between" as="ul">
      <Text
        fontFamily="sans"
        fontSize="xl"
        fontColor="primary.4"
        fontWeight="bold"
        minWidth={250}
        mr={8}
      >
        Ostatnie posty.
      </Text>
      <Box display="flex" flexDirection="column" maxWidth={920} flex={1}>
        {posts.map((post, idx) => (
          <DirectionalFade delay={0.075}>
            <PostItem data={post} />
          </DirectionalFade>
        ))}
      </Box>
    </Box>
    <Box textAlign="right" mt={8}>
      <LocalizedLink to="/blog" display={['none', 'none', 'block']}>
        <ArrowButton fontColor="primary.10" fontSize="lg">
          {button}
        </ArrowButton>
      </LocalizedLink>
    </Box>
  </Box>
)

export default BlogSlide
