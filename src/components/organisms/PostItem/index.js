/* eslint-disable camelcase */
import React from 'react'
import { formatDate } from '../../../utilitity/date'
import { LocalizedLink } from '../../atoms/Link'
import Text from '../../atoms/Text'
import Box from '../../atoms/Box'

const PostItem = ({ data, ...rest }) => {
  console.log({ data, rest })
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
            fontWeight="black"
            style={{ letterSpacing: '-0.04em' }}
          >
            {title.text}
          </Text>
        </LocalizedLink>
        <Box>
          <Text fontSize="sm" fontColor="primary.6">
            {formatDate(last_publication_date)}
          </Text>
          <Text fontSize="sm" mx={2} fontColor="primary.6">
            •
          </Text>
          <Text fontSize="sm" fontColor="primary.6">
            JavaScript, Front End
          </Text>
          <Text
            display={['block']}
            fontColor="primary.9"
            fontWeight="medium"
            fontSize={['base', 'lg']}
            mt={4}
          >
            {description.text}
          </Text>
        </Box>
      </Box>
    </Box>
  )
}

export default PostItem
