import React, { useContext } from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { ScrollContext } from '../../../context/ScrollContext'
import Heading from '../../atoms/Heading'
import { Link } from '../../atoms/Link'
import TextHighlight from '../../atoms/TextHighlight'
import FooterSocials from '../../molecules/FooterSocialIcons'
import FooterNavigation from '../../molecules/FooterNavigation'
import Subheading from '../../atoms/Subheading'
import Paragraph from '../../atoms/Paragraph'
import Icon from '../../atoms/Icon'

const FooterContainer = styled.footer`
  ${tw`fixed pin-b pin-l w-full text-primary-100 flex-col items-center bg-primary-800`};
  display: ${props => (props.visible ? 'flex' : 'none')};
  box-sizing: border-box;

  height: 500px;
  z-index: 3;
`

const Wrapper = styled.div`
  ${tw`w-full`}
`

const UpperWrapper = styled(Wrapper)`
  ${tw`flex flex-col items-center justify-center text-center`}
  max-width: 1200px;
  height: 500px;
`

const BottomWrapper = styled(Wrapper)`
  ${tw`bg-primary-900 py-4`}
`

const BottomRow = styled.div`
  ${tw`flex m-auto items-center justify-between `}
  max-width: 1200px;
`

const ItalicSpan = styled.span`
  ${tw`italic`}
`

const ContactTile = styled.div``

const Footer = () => {
  const [scroll] = useContext(ScrollContext)

  const visible = scroll.y > 920
  return (
    <FooterContainer visible={visible}>
      <UpperWrapper>
        <TextHighlight
          fontColor="primary-200"
          size="4xl"
          weight="bold"
          height="4xl"
          underlineColor="primary-900"
        >
          Let’s create something <ItalicSpan>beautiful!</ItalicSpan>
        </TextHighlight>
        <Paragraph size="lg" my={6}>
          You may find me on social networks given below, or e-mail me directly.
          If you're a digital or design agency, recruiter or just interested in
          a hard copy of my resumé as a PDF, download it here.
        </Paragraph>
      </UpperWrapper>
      <BottomWrapper>
        <BottomRow>
          <Link>
            <TextHighlight underlineColor="primary-800" weight="bold">
              source code
            </TextHighlight>
          </Link>
          <Subheading weight="bold">hello@ddomanski.dev</Subheading>
          <FooterSocials />
        </BottomRow>
      </BottomWrapper>
    </FooterContainer>
  )
}

export default Footer
