import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Icon from '../../atoms/Icon'
import Heading from '../../atoms/Heading'
import Paragraph from '../../atoms/Paragraph'

const Container = styled.article`
  ${tw`w-full flex items-center bg-primary-100 my-8 py-4 shadow`}
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
  ${tw`text-right mx-8`}
  flex:2;
`

const PostItem = () => (
  <Container>
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
