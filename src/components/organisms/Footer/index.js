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
  ${tw`fixed pin-b pin-l w-full py-8 lg:py-12 px-8 xl:px-24 text-primary-100`};
  display: ${props => (props.visible ? 'flex' : 'none')};
  background-color: #353535;
  box-sizing: border-box;
  height: 500px;
  z-index: 3;
`

const Wrapper = styled.div`
  ${tw`w-full m-auto flex items-center justify-center `}
  max-width: 1200px;
`

const Column = styled.article`
  ${tw`h-full flex flex-col justify-center`}
  width: 33.333%;
`

const DownloadBtn = styled.button`
  ${tw`flex items-center bg-transparent p-0`}
  border: 0;
`

const ContactTile = styled.div``

const Footer = () => {
  const [scroll] = useContext(ScrollContext)

  const visible = scroll.y > 920
  return (
    <FooterContainer visible={visible}>
      <Wrapper>
        <Column>
          <Heading>Daniel.</Heading>
          <Link>
            <TextHighlight underlineColor="primary-900">
              source code here
            </TextHighlight>
          </Link>
          <FooterSocials />
        </Column>
        <Column>
          <Subheading size="sm" weight="bold">
            Site
          </Subheading>
          <FooterNavigation />
        </Column>
        <Column>
          <Subheading size="sm" weight="bold">
            Resume
          </Subheading>
          <DownloadBtn>
            <Subheading size="base">Download</Subheading>
            <Icon icon="arrow" fill="#f0f0f0" width="24px" />
          </DownloadBtn>
          <Subheading size="sm" weight="bold">
            Site
          </Subheading>
          <ContactTile>
            <Subheading>Got a project you need help with?</Subheading>
            <Subheading>
              <TextHighlight underlineColor="primary-800" weight="bold">
                Let's create something beautiful.
              </TextHighlight>
            </Subheading>
          </ContactTile>
        </Column>
      </Wrapper>
    </FooterContainer>
  )
}

export default Footer
