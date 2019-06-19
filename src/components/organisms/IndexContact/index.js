import React from 'react'
import styled from 'styled-components'
import CrossedHeading from '../../atoms/CrossedHeading'
import Paragraph from '../../atoms/Paragraph'
import TextHighlight from '../../atoms/TextHighlight'
import FooterSocialIcons from '../../molecules/FooterSocialIcons'

const Container = styled.section`
  ${tw`w-full inline-flex flex-col items-center`};
  box-sizing: border-box;
`

const InnerContainer = styled.section`
  ${tw`bg-primary-200 py-8 px-8 overflow-hidden text-center`};

  width: 100vw;
  box-sizing: border-box;
`

const IndexContact = () => (
  <Container>
    <CrossedHeading>Contact</CrossedHeading>
    <InnerContainer>
      <Paragraph>If you want me to work for you - drop me a line!</Paragraph>
      <Paragraph size="xl">
        <TextHighlight size="xl">av3ng3roo@gmail.com</TextHighlight>
      </Paragraph>
      <FooterSocialIcons />
    </InnerContainer>
  </Container>
)

export default IndexContact
