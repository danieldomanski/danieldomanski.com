import React, { useContext } from 'react'
import styled from 'styled-components'
import Box from '../../atoms/Box'
import HomeParticles from '../HomeParticles'
import { ContentContext } from '../../../context/ContentContext'
import RichText from '../../organisms/Slices/RichText'
import useWindowScrollPosition from '@rehooks/window-scroll-position'
import useWindowSize from '../../../hooks/useWindowSize'

const Container = styled.footer`
  ${tw`md:fixed pin-b pin-l w-full text-primary-100 flex-col items-center overflow-hidden`};
  background-color: #f4f4f4;
  box-sizing: border-box;
  z-index: 5;

  @media screen and (max-height: 768px) and (min-width: 768px) {
    position: absolute;
  }

  @media screen and (min-width: 768px) {
    display: ${props =>
      !props.visible && props.variant === 'primary' ? 'none' : 'flex'};
    background: radial-gradient(
      1300px at 50% -50%,
      #53617a -8%,
      #25273c 45%,
      #161723 100%
    );
    height: 800px;
    z-index: 5;
  }
`

const Line = styled.span`
  ${tw`m-auto my-8 xl:my-10`}
  display: block;

  width: 80px;
  height: 4px;
  background-color: #c4c4c4;
  opacity: 1;
`

const WorkWithMe = ({ children, variant }) => {
  const [content] = useContext(ContentContext)
  const { title, subtitle, description } = content.home.workWithMe
  const scroll = useWindowScrollPosition({ throttle: 0 })
  const { height } = useWindowSize()
  const visible = scroll.y > height

  return (
    <Container visible={visible} variant={variant}>
      <Box
        width={1}
        height="100%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        px={[6, 8, 12]}
        py={[16, 16, 0]}
        borderTop="1px solid rgba(0,0,0,0.1)"
      >
        <HomeParticles variant="footer" />
        <RichText content={title} />
        <RichText content={subtitle} />
        <Line />
        <RichText content={description} />
      </Box>
      {children}
    </Container>
  )
}

export default WorkWithMe
