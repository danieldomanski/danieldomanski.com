import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { formatDate } from '../../../utilitity/date'
import { LocalizedLink } from '../../atoms/Link'
import Text from '../../atoms/Text'
import Box from '../../atoms/Box'

const Container = styled.a`
  ${tw`flex flex-col items-start pb-8 mb-8`}

  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
`

const PostItem = ({ data, ...rest }) => {
  const { title, description, icon } = data.node.data
  const { last_publication_date } = data.node
  console.log({ rest })
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
          fontSize={['lg', 'xl', '3xl']}
          fontWeight="black"
          lineHeight="tight"
          hover={{ color: '#0055FF' }}
        >
          {title.text}
        </Text>
      </LocalizedLink>

      <Box mt={1}>
        <Text fontFamily="sans" fontColor="primary.5">
          {formatDate(last_publication_date)}
        </Text>
        <Text fontFamily="sans" mx={2} fontColor="primary.5">
          •
        </Text>
        <Text fontFamily="sans" fontColor="primary.5">
          JavaScript, Front End
        </Text>
        <Text
          display={['none', 'none', 'block']}
          fontColor="primary.10"
          fontWeight="medium"
          fontSize="xl"
          mt={4}
        >
          {description.text}
        </Text>
      </Box>
    </Box>
  )
}

export default PostItem
