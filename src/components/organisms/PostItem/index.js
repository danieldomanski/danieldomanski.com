import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { formatDate } from '../../../utilitity/date'
import Icon from '../../atoms/Icon'
import Text from '../../atoms/Text'
import Box from '../../atoms/Box'

const Container = styled.a`
  ${tw`inline-block flex flex-col items-start mb-12 `}
  transition: 0.4s ease-in-out;

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
      <Box display="flex" alignItems="center" mb={3}>
        <Box>
          <Text
            fontFamily="sans"
            fontColor="primary.10"
            fontSize={['sm', 'base', 'xl']}
            fontWeight="black"
            hover={{ color: '#0055FF' }}
          >
            {title.text}
          </Text>
          <Box>
            <Text fontFamily="sans" fontColor="primary.4">
              {formatDate(last_publication_date)}
            </Text>
            <Text fontFamily="sans" mx={2} fontColor="primary.4">
              •
            </Text>
            <Text fontFamily="sans" fontColor="primary.4">
              JavaScript, Front End
            </Text>
          </Box>
        </Box>
      </Box>
      <Text
        fontFamily="sans"
        display={['none', 'none', 'block']}
        fontColor="primary.8"
        fontWeight="medium"
        fontSize="lg"
        mt={1}
      >
        {description.text}
      </Text>
    </Container>
  )
}

export default PostItem
