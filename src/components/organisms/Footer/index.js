import React, { useContext } from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { ScrollContext } from '../../../context/ScrollContext'

const FooterContainer = styled.footer`
  ${tw`md:fixed pin-b pin-l w-full text-primary-100 flex-col items-center overflow-hidden`};

  box-sizing: border-box;
  z-index: 5;

  @media screen and (min-width: 768px) {
    display: ${props =>
      !props.visible && props.variant === 'primary' ? 'none' : 'flex'};
    background: radial-gradient(
      1300px at 50% -50%,
      #53617a -8%,
      #25273c 45%,
      #161723 100%
    );
    height: 90vh;
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
