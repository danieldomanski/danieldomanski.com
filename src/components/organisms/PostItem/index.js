import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { formatDate } from '../../../utilitity/date'
import Icon from '../../atoms/Icon'
import Text from '../../atoms/Text'
import Box from '../../atoms/Box'

const Container = styled.a`
  ${tw`inline-block flex flex-col items-start pb-8 mb-8`}

  transition: 0.4s ease-in-out;
  min-width: 686px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  &:focus {
    box-shadow: 0px 0px 0px 4px rgba(0, 0, 0, 0.1);
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
            lineHeight="tight"
            hover={{ color: '#0055FF' }}
          >
            {title.text}
          </Text>
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
      </Box>
    </Container>
  )
}

export default PostItem
