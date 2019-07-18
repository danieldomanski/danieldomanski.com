import React, { useContext } from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { ScrollContext } from '../../../context/ScrollContext'
import { CollapsableLink } from '../../atoms/Link'
import FooterSocials from '../../molecules/FooterSocialIcons'
import Text from '../../atoms/Text'
import Paragraph from '../../atoms/Paragraph'
import { ContentWrapper } from '../../atoms/Wrapper'

const FooterContainer = styled.footer`
  ${tw`absolute md:fixed pin-b pin-l w-full text-primary-100 flex-col items-center overflow-hidden`};
  background-color: #1f1f1f;
  box-sizing: border-box;
  height: 600px;
  z-index: 4;
  padding-bottom: 60px;

  @media screen and (min-width: 768px) {
    display: ${props => (props.visible ? 'flex' : 'none')};
    height: 500px;
  }
`

const UpperWrapper = styled(ContentWrapper)`
  ${tw`flex flex-col justify-center items-center h-full text-center px-12 xl:px-32 py-8`}
`

const BottomWrapper = styled.div`
  ${tw`absolute pin-b w-full py-8 md:py-4`}
  background-color: #151515;
`

const BottomRow = styled(ContentWrapper)`
  ${tw`h-full flex flex-col md:flex-row items-center justify-between px-12 xl:px-32`}

  & > * {
    margin: 0.25em 0;
  }
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
        <Text fontColor="primary.3" fontSize={['3xl', '5xl']} fontWeight="bold">
          Let’s create something <ItalicSpan>beautiful!</ItalicSpan>
        </Text>
        <Paragraph fontSize={['base', 'lg']} fontColor="primary.6" my={[4]}>
          You may find me on social networks given below, or
          <CollapsableLink fontSize={['sm', 'base', 'lg']} mx={1}>
            e-mail me directly.
          </CollapsableLink>
          If you're a digital or design agency, recruiter or just interested in
          a hard copy of my resumé as a PDF,
          <CollapsableLink fontSize={['sm', 'base', 'lg']} mx={1}>
            download it here.
          </CollapsableLink>
        </Paragraph>
      </UpperWrapper>
      <BottomWrapper>
        <BottomRow>
          <CollapsableLink fontSize={['sm', 'base']}>
            source code
          </CollapsableLink>
          <Text
            fontFamily="sans"
            fontSize={['sm', 'base']}
            fontColor="primary.3"
            fontWeight="bold"
          >
            hello@ddomanski.dev
          </Text>
          <FooterSocials />
        </BottomRow>
      </BottomWrapper>
    </FooterContainer>
  )
}

export default Footer
