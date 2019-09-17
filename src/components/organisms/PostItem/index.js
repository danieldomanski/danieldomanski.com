/* eslint-disable camelcase */
import React from 'react'
import { formatDate } from '../../../utils/date'
import LocalizedLink from '../../atoms/LocalizedLink'
import Text from '../../atoms/Text'
import Box from '../../atoms/Box'

const PostItem = ({ data, ...rest }) => {
  const { title, description } = data.node.data
  const { last_publication_date } = data.node

  return (
    <Box display="flex" alignItems="center" m={[0, 0, 0, 0, 'auto']} {...rest}>
      <Box flexGrow={1}>
        <LocalizedLink to={`/blog/${data.node.uid}`}>
          <Text
            fontFamily="sans"
            fontColor="primary.11"
            fontSize={['2xl', '2xl', '3xl']}
            fontWeight="black"
            letterSpacing="-0.05em"
          >
            {title.text}
          </Text>
        </LocalizedLink>
        <Box letterSpacing="-0.025em">
          <Text fontColor="primary.6" fontSize="sm">
            {formatDate(last_publication_date)}
          </Text>
          <Text mx={2} fontColor="primary.6" fontSize="sm">
            •
          </Text>
          <Text fontColor="primary.6" fontSize="sm">
            JavaScript, Front End
          </Text>
          <Text
            fontColor="primary.9"
            fontWeight="medium"
            fontSize={['base', 'lg']}
            mt={3}
          >
            {description.text}
          </Text>
        </Box>
      </Box>
    </Box>
  )
}

export default PostItem
