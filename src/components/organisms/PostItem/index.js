import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { formatDate } from '../../../utilitity/date'
import { LocalizedLink } from '../../atoms/Link'
import Text from '../../atoms/Text'
import Box from '../../atoms/Box'

const PostItem = ({ data, ...rest }) => {
  const { title, description, icon } = data.node.data
  const { last_publication_date } = data.node

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      {...rest}
    >
      <LocalizedLink to={`/blog/${data.node.uid}`}>
        <Text
          fontFamily="sans"
          fontColor="primary.10"
          fontSize={['xl', '2xl']}
          fontWeight="black"
          lineHeight="tight"
          hover={{ color: '#0055FF' }}
        >
          {title.text}
        </Text>
      </LocalizedLink>
      <Box mt={1}>
        <Text fontSize="sm" fontFamily="sans" fontColor="primary.6">
          {formatDate(last_publication_date)}
        </Text>
        <Text fontSize="sm" fontFamily="sans" mx={2} fontColor="primary.6">
          •
        </Text>
        <Text fontSize="sm" fontFamily="sans" fontColor="primary.6">
          JavaScript, Front End
        </Text>
        <Text
          fontFamily="sans"
          display={['block']}
          fontColor="primary.7"
          fontWeight="medium"
          fontSize={['base', 'lg']}
          mt={3}
        >
          {description.text}
        </Text>
      </Box>
    </Box>
  )
}

export default PostItem
