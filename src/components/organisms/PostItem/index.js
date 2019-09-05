/* eslint-disable camelcase */

import React from 'react'
import { formatDate } from '../../../utilitity/date'
import { LocalizedLink } from '../../atoms/Link'
import Text from '../../atoms/Text'
import Box from '../../atoms/Box'

const PostItem = ({ data, ...rest }) => {
  const { title, description } = data.node.data
  const { last_publication_date } = data.node

  return (
    <Box display="flex" alignItems="center" m={[0, 0, 0, 0, 'auto']} {...rest}>
      <Box flex={1}>
        <LocalizedLink to={`/blog/${data.node.uid}`}>
          <Text
            fontFamily="sans"
            fontColor="primary.10"
            fontSize={['xl', '2xl', '2xl']}
            fontWeight="bold"
            hover={{ color: '#0055FF' }}
          >
            {title.text}
          </Text>
        </LocalizedLink>

        <Box mt={3}>
          <Text fontSize="sm" fontFamily="serif" fontColor="primary.6">
            {formatDate(last_publication_date)}
          </Text>
          <Text fontSize="sm" fontFamily="serif" mx={2} fontColor="primary.6">
            •
          </Text>
          <Text fontSize="sm" fontFamily="serif" fontColor="primary.6">
            JavaScript, Front End
          </Text>
          <Text
            fontFamily="serif"
            display={['block']}
            fontColor="primary.7"
            fontWeight="medium"
            fontSize={['base', 'base']}
            mt={2}
          >
            {description.text}
          </Text>
        </Box>
      </Box>
    </Box>
  )
}

export default PostItem
