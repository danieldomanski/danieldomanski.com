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
  tags: post.node.data.tags.map(el => el.tag.document[0].data.tag),
})

const PostItem = ({ post, ...rest }) => {
  const { uid, title, description, date, tags } = formatPost(post)

  return (
    <Box display="flex" alignItems="center" m={[0, 0, 0, 0, 'auto']} {...rest}>
      <Box flexGrow={1}>
        <LocalizedLink to={`/blog/${uid}`}>
          <Text
            fontFamily="sans"
            fontColor="primary.11"
            fontSize={['2xl', '2xl', '3xl']}
            fontWeight="black"
            letterSpacing="-0.05em"
          >
            {title}
          </Text>
        </LocalizedLink>
        <Box>
          <Text fontColor="primary.6" fontSize="sm">
            {date}
          </Text>
          <Text mx={2} fontColor="primary.6" fontSize="sm">
            •
          </Text>
          <Text fontColor="primary.6" fontSize="sm">
            {tags.join(', ')}
          </Text>
        </Box>
        <Text
          fontColor="primary.9"
          fontWeight="medium"
          fontSize={['base', 'lg']}
          mt={3}
        >
          {description}
        </Text>
      </Box>
    </Box>
  )
}

export default PostItem
