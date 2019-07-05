import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Icon from '../../atoms/Icon'
import Heading from '../../atoms/Heading'
import Paragraph from '../../atoms/Paragraph'

const Container = styled.a`
  ${tw`w-full flex items-center bg-primary-100 my-4 py-2 shadow`}
  transition: 0.4s ease-in-out;

  &:hover {
    ${tw`shadow-lg`};
    background-color: #f6f6f6;
    transform: scale(1.01);
  }

  &:focus {
    box-shadow: 0px 0px 0px 3px rgba(0, 0, 0, 0.1);
  }

  text-decoration: none;
  max-height: 100px;
`

const IconContainer = styled.span`
  ${tw`mx-8`}
`

const Text = styled.div`
  ${tw`flex flex-col justify-center`}
  flex:6;
`

const DateContainer = styled.div`
  ${tw`font-sans text-sm text-right mx-8 text-primary-700`}
  flex:1;
`

const PostItem = () => (
  <Container href="#">
    <IconContainer>
      <Icon icon="react" width="48" />
    </IconContainer>
    <Text>
      <Heading fontColor="primary-900" size="xl" weight="bold">
        ttir
      </Heading>
      <Paragraph fontColor="primary-700" size="sm" my={1}>
        jakis tam opis
      </Paragraph>
    </Text>
    <DateContainer>May 09, 2019</DateContainer>
  </Container>
)

export default PostItem
