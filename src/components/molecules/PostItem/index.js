/* eslint-disable camelcase */
import React from 'react'
import Box from '../../atoms/Box'
import Text from '../../atoms/Text'
import LocalizedLink from '../../atoms/LocalizedLink'
import { formatDate } from '../../../utils/date'

const formatPost = post => ({
  date: formatDate(post.node.last_publication_date),
  uid: post.node.uid,
  title: post.node.data.title.text,
  description: post.node.data.description.text,
  tags: post.node.data.tags.map(el =>
    el.tag ? el.tag.document[0].data.tag : null
  ),
})

const PostCaptionText = ({ children, ...rest }) => (
  <Text as="span" fontColor="primary.8" fontSize="sm" {...rest}>
    {children}
  </Text>
)

const PostItem = ({ post, ...rest }) => {
  const { uid, title, description, date, tags } = formatPost(post)

  return (
    <Box display="flex" alignItems="center" m={[0, 0, 0, 0, 'auto']} {...rest}>
      <Box flexGrow={1}>
        <LocalizedLink to={`/blog/${uid}`} data-testid="post-item">
          <Text
            as="h3"
            fontFamily="sans"
            fontColor="primary.11"
            fontSize={['2xl', '3xl']}
            fontWeight="black"
            letterSpacing="-0.05em"
          >
            {title}
          </Text>
        </LocalizedLink>
        <Box mt={1}>
          <PostCaptionText>{date}</PostCaptionText>
          <PostCaptionText mx={2}>
            {tags.length > 0 ? '•' : null}
          </PostCaptionText>
          <PostCaptionText>{tags.join(', ')}</PostCaptionText>
        </Box>
        <Text
          fontColor="primary.11"
          fontWeight="medium"
          fontSize={['sm', 'base']}
          maxWidth={760}
          mt={3}
        >
          {description}
        </Text>
      </Box>
    </Box>
  )
}

export default PostItem
