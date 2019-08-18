import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { formatDate } from '../../../utilitity/date'
import Icon from '../../atoms/Icon'
import Text from '../../atoms/Text'
import Box from '../../atoms/Box'

const Container = styled.a`
  ${tw`inline-block flex flex-col items-start pb-8 mb-8 `}
  transition: 0.4s ease-in-out;
  min-width: 800px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.075);
  &:focus {
    box-shadow: 0px 0px 0px 3px rgba(0, 0, 0, 0.25);
  }
  text-decoration: none;
`

const PostItem = ({ data }) => {
  const { title, description, icon } = data.node.data
  const { last_publication_date } = data.node

  return (
    <Container href={`/blog/${data.node.uid}`}>
      <Box display="flex" alignItems="center">
        <Box>
          <Text
            fontFamily="sans"
            fontColor="primary.10"
            fontSize={['sm', 'base', '3xl']}
            fontWeight="black"
            hover={{ color: '#0055FF' }}
          >
            {title.text}
          </Text>
          <Box my={2}>
            <Text fontSize="sm" fontColor="primary.4">
              {formatDate(last_publication_date)}
            </Text>
            <Text mx={2} fontSize="sm" fontColor="primary.4">
              •
            </Text>
            <Text fontSize="sm" fontColor="primary.4">
              JavaScript, Front End
            </Text>
          </Box>
        </Box>
      </Box>
      <Text
        display={['none', 'none', 'block']}
        fontColor="primary.8"
        fontWeight="medium"
        fontSize="base"
      >
        {description.text}
      </Text>
    </Container>
  )
}

export default PostItem
