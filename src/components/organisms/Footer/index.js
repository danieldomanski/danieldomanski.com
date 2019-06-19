import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import FooterSocialIcons from '../../molecules/FooterSocialIcons'
import TextHiglight from '../../atoms/TextHighlight'

const Link = styled.a`
  ${tw`cursor-pointer no-underline text-primary-900`};
`

const FooterContainer = styled.footer`
  ${tw`inline-flex flex-col md:flex-row items-center justify-between py-8 lg:py-12 mx-8 xl:mx-24`};
`

const Footer = () => (
  <FooterContainer>
    <TextHiglight>
      <Link href="http://github.com">source code here</Link>
    </TextHiglight>
    <FooterSocialIcons hiddenOnMobile />
  </FooterContainer>
)

export default Footer
