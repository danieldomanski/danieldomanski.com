import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { formatDate } from '../../../utilitity/date'
import Icon from '../../atoms/Icon'
import Text from '../../atoms/Text'
import Paragraph from '../../atoms/Paragraph'

const Container = styled.a`
  ${tw`w-full flex items-center my-4 py-4 shadow`}
  transition: 0.4s ease-in-out;
  background-color: #f6f6f6;

  &:hover {
    ${tw`shadow-lg`};
    background-color: #f6f6f6;
  }

  &:focus {
    box-shadow: 0px 0px 0px 3px rgba(0, 85, 255, 0.5);
  }

  text-decoration: none;
  max-height: 100px;
`

const IconContainer = styled.span`
  ${tw`mx-8`}
`

const TextContainer = styled.div`
  ${tw`flex flex-col justify-center`}
  flex:6;
`

const DateContainer = styled.div`
  ${tw`font-sans text-sm text-right mx-8 text-primary-700`}
  flex:1;
`

const PostItem = ({ data }) => {
  console.log({ postItem: data })
  const { title, description, icon } = data.node.data
  const { last_publication_date } = data.node

  return (
    <Container href={`/blog/${data.node.uid}`}>
      <IconContainer>
        <Icon icon={icon.text} width="64" />
      </IconContainer>
      <TextContainer>
        <Text
          fontColor="primary.8"
          fontSize="xl"
          fontWeight="black"
          mb={1}
          hover={{ color: '#0055FF' }}
        >
          {title.text}
        </Text>
        <Text fontColor="primary.6" fontSize="sm">
          {description.text}
        </Text>
      </TextContainer>
      <DateContainer>{formatDate(last_publication_date)}</DateContainer>
    </Container>
  )
}

export default PostItem
