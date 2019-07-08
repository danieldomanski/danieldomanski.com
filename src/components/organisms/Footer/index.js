import React, { useContext } from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { ScrollContext } from '../../../context/ScrollContext'
import { CollapsableLink } from '../../atoms/Link'
import TextHighlight from '../../atoms/TextHighlight'
import FooterSocials from '../../molecules/FooterSocialIcons'
import Heading from '../../atoms/Heading'
import Paragraph from '../../atoms/Paragraph'
import { ContentWrapper } from '../../atoms/Wrapper'

const FooterContainer = styled.footer`
  ${tw`absolute md:fixed pin-b pin-l w-full text-primary-100 flex-col items-center`};
  background-color: #1a1a1a;
  box-sizing: border-box;

  z-index: 4;

  @media screen and (min-width: 768px) {
    display: ${props => (props.visible ? 'flex' : 'none')};
    height: 500px;
  }
`

const UpperWrapper = styled(ContentWrapper)`
  ${tw`px-12 xl:px-32 py-12`}
`

const BottomWrapper = styled.div`
  ${tw`absolute  pin-b w-full `}
  background-color: #151515;
  height: 80px;
`

const BottomRow = styled(ContentWrapper)`
  ${tw`h-full flex items-center justify-between px-12 xl:px-32`}
`

const ItalicSpan = styled.span`
  ${tw`italic`}
`

const Footer = () => {
  const [scroll] = useContext(ScrollContext)

  const visible = scroll.y > 920
  return (
    <FooterContainer visible={visible}>
      <UpperWrapper>
        <TextHighlight
          fontColor="primary.3"
          fontSize="5xl"
          fontWeight="bold"
          underlineColor="primary-900"
        >
          Let’s create something <ItalicSpan>beautiful!</ItalicSpan>
        </TextHighlight>
        <Paragraph fontSize="lg" fontColor="primary.6" my={6}>
          You may find me on social networks given below, or
          <CollapsableLink fontSize="lg" mx={1}>
            e-mail me directly.
          </CollapsableLink>
          If you're a digital or design agency, recruiter or just interested in
          a hard copy of my resumé as a PDF,
          <CollapsableLink size="lg" mx={1}>
            download it here.
          </CollapsableLink>
        </Paragraph>
      </UpperWrapper>
      <BottomWrapper>
        <BottomRow>
          <CollapsableLink fontSize="lg">source code</CollapsableLink>
          <Heading fontSize="lg" fontColor="primary.3" fontWeight="bold">
            hello@ddomanski.dev
          </Heading>
          <FooterSocials />
        </BottomRow>
      </BottomWrapper>
    </FooterContainer>
  )
}

export default Footer
