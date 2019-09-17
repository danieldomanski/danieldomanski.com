import React, { useContext } from 'react'
import styled from 'styled-components'
import Box from '../../atoms/Box'
import HomeParticles from '../HomeParticles'
import { ContentContext } from '../../../context/ContentContext'
import RichText from '../../organisms/Slices/RichText'
import useWindowScrollPosition from '@rehooks/window-scroll-position'
import useWindowSize from '../../../hooks/useWindowSize'

const Container = styled.footer`
  width: 100%;
  background-color: #fafafa;
  z-index: 5;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    display: ${props =>
      !props.visible && props.variant === 'primary' ? 'none' : 'flex'};
    height: 810px;
    flex-direction: column;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 5;
    background: radial-gradient(
      1300px at 50% -50%,
      #53617a -8%,
      #25273c 45%,
      #161723 100%
    );
  }

  @media screen and (min-width: 768px) and (max-height: 768px) {
    position: absolute;
  }
`

const Line = styled.span`
  display: block;
  margin: 2rem auto;
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
        boxShadow={['0 1px 0 rgba(0,0,0,.1)', '0 1px 0 rgba(0,0,0,.1)', 0]}
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
