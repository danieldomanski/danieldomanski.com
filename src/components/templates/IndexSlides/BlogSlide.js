import React, { useContext } from 'react'
import styled from 'styled-components'
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
      py={[8, 8, 16, 32]}
      px={[8, 8, 12, 12, 16, 16]}
    >
      <HomeInfoRow
        title={title}
        description={description}
        button={button}
        idx={3}
      />
      <Box
        display="flex"
        flexDirection={['column', 'column', 'column', 'column', 'row']}
        justifyContent="space-between"
        as="ul"
      >
        <Text
          fontFamily="sans"
          fontSize={['lg', 'lg', 'xl']}
          textAlign={['center', 'left']}
          fontColor="primary.4"
          fontWeight="bold"
          minWidth={250}
          mr={[4, 8, 8, 16, 32]}
          mb={[8, 8, 8]}
        >
          Ostatnie posty.
        </Text>
        <Box display="flex" flexDirection="column" maxWidth={860} flex={1}>
          {posts.map((post, idx) => (
            <DirectionalFade delay={0.075}>
              <PostItem
                data={post}
                pb={idx === posts.length - 1 ? 0 : [8, 8, 12]}
                pt={idx === 0 ? 0 : [4, 4, 8]}
                mb={idx === posts.length - 1 ? 0 : [4, 4, 8]}
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
      <Box textAlign={['center', 'left', 'right']} mt={[12, 16, 24]}>
        <LocalizedLink to="/blog" display={['block']}>
          <ArrowButton fontColor="cosmic.2" fontSize={['sm', 'base', 'base']}>
            {button}
          </ArrowButton>
        </LocalizedLink>
      </Box>
    </Box>
  )
}

export default BlogSlide
