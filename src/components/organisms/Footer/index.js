import React, { useContext } from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { ScrollContext } from '../../../context/ScrollContext'
import Heading from '../../atoms/Heading'
import { Link } from '../../atoms/Link'
import TextHighlight from '../../atoms/TextHighlight'

const FooterContainer = styled.footer`
  ${tw`fixed pin-b pin-l w-full flex items-center justify-center py-8 lg:py-12 px-8 xl:px-24 text-primary-100`};
  display: ${props => (props.visible ? 'block' : 'none')};
  background-color: #353535;
  box-sizing: border-box;
  height: 500px;
  z-index: 3;
`

const Column = styled.article`
  ${tw`inline-block text-center`}
  width: 33.333%;
`

const Footer = () => {
  const [scroll] = useContext(ScrollContext)

  const visible = scroll.y > 920
  return (
    <FooterContainer visible={visible}>
      <Column>
        <Heading>Daniel</Heading>
        <Link>
          <TextHighlight>source code here</TextHighlight>
        </Link>
      </Column>
      <Column>asd</Column>
      <Column>ads</Column>
    </FooterContainer>
  )
}

export default Footer
