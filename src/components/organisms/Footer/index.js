import React, { useContext } from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { ScrollContext } from '../../../context/ScrollContext'

const FooterContainer = styled.footer`
  ${tw`md:fixed pin-b pin-l w-full text-primary-100 flex-col items-center overflow-hidden`};
  background: #101020;
  box-sizing: border-box;
  z-index: 5;

  @media screen and (min-width: 768px) {
    background: radial-gradient(
      1300px at 50% -40%,
      #56657f 0%,
      #25273c 40%,
      #0b0b12 100%
    );
    display: ${props =>
      !props.visible && props.variant === 'primary' ? 'none' : 'flex'};
    height: 800px;
    z-index: 4;
  }
`

const Footer = ({ children, variant }) => {
  const [scroll] = useContext(ScrollContext)
  const visible = scroll.y > 920

  return (
    <FooterContainer visible={visible} variant={variant}>
      {children}
    </FooterContainer>
  )
}

export default Footer
