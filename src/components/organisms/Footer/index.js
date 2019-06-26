import React, { useContext } from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { ScrollContext } from '../../../context/ScrollContext'
import FooterSocialIcons from '../../molecules/FooterSocialIcons'
import TextHiglight from '../../atoms/TextHighlight'

const Link = styled.a`
  ${tw`cursor-pointer no-underline text-primary-100`};
`

const FooterContainer = styled.footer`
  ${tw`fixed pin-b pin-l w-full inline-flex flex-col md:flex-row items-center justify-between py-8 lg:py-12 px-8 xl:px-24 text-primary-100`};
  display: ${props => (props.visible ? 'block' : 'none')};
  background-color: #353535;
  box-sizing: border-box;
  height: 500px;
  z-index: 3;
`

const Footer = () => {
  const [scroll] = useContext(ScrollContext)

  const visible = scroll.y > 920
  return <FooterContainer visible={visible}>Daniel</FooterContainer>
}

export default Footer
