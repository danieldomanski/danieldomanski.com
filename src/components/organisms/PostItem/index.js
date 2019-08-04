import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { formatDate } from '../../../utilitity/date'
import Icon from '../../atoms/Icon'
import Text from '../../atoms/Text'

const Container = styled.a`
  ${tw`w-full flex items-center py-2 sm:py-4 shadow mb-4`}
  background-color: #fafafa;
  transition: 0.4s ease-in-out;

  &:focus {
    box-shadow: 0px 0px 0px 3px rgba(0, 85, 255, 0.5);
  }

  text-decoration: none;
`

const IconContainer = styled.span`
  ${tw`mx-4 md:mx-8`}
`

const TextContainer = styled.div`
  ${tw`flex flex-col justify-center`}
  flex:6;
`

const DateContainer = styled.div`
  ${tw`hidden md:block font-sans text-sm text-right mx-8 text-primary-700`}
  flex:1;
`

const PostItem = ({ data }) => {
  const { title, description, icon } = data.node.data
  const { last_publication_date } = data.node

  return (
    <Container href={`/blog/${data.node.uid}`}>
      <IconContainer>
        <Icon icon={icon.text} width={[40, 40, 60]} />
      </IconContainer>
      <TextContainer>
        <Text
          fontColor="primary.8"
          fontSize={['sm', 'lg']}
          fontWeight="black"
          hover={{ color: '#0055FF' }}
        >
          {title.text}
        </Text>
        <Text
          display={['none', 'none', 'block']}
          fontColor="primary.5"
          fontSize="sm"
        >
          {description.text}
        </Text>
      </TextContainer>
      <DateContainer>{formatDate(last_publication_date)}</DateContainer>
    </Container>
  )
}

export default PostItem
