import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import FooterSocialIcons from '../../molecules/FooterSocialIcons'
import { FooterLink } from '../../atoms/Link'

const FooterContainer = styled.footer`
  ${tw`flex justify-between py-12 mx-8 xl:mx-24`};
`

const Footer = () => (
  <FooterContainer>
    <FooterLink>source code here</FooterLink>
    <FooterSocialIcons />
  </FooterContainer>
)

export default Footer
