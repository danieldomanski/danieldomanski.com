import React, { useContext } from 'react'
import styled from 'styled-components'
import useWindowScrollPosition from '@rehooks/window-scroll-position'
import Box from '../../atoms/Box'
import HomeParticles from '../HomeParticles'
import { ContentContext } from '../../../context/ContentContext'
import RichText from '../../organisms/Slices/RichText'
import useWindowSize from '../../../hooks/useWindowSize'
import theme from '../../../config/theme'

const Container = styled.footer`
  width: 100%;
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
    padding-top: 3rem;
  }

  @media screen and (min-width: 768px) and (max-height: 768px) {
    position: absolute;
  }
`

const Line = styled.span`
  display: block;
  margin: 1.5rem auto;
  width: 60px;
  height: 3px;
  background-color: ${theme.colors.primary[3]};
  opacity: 1;

  @media screen and (min-width: 768px) {
    background-color: ${theme.colors.cosmic[4]};
    margin: 2rem auto;
  }
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
        height="100%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        bg={['#fcfcfc', '#fcfcfc', 'unset']}
        mx={[6, 8, 0]}
        my={[24, 24, 0]}
        px={[8, 16, 12]}
        py={[12, 16, 0]}
        boxShadow={['lg', 'lg', 'none']}
        data-testid="footer"
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
