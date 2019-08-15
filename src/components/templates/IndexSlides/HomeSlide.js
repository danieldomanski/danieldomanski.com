import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import Text from '../../atoms/Text'
import Box from '../../atoms/Box'
import HomeParallax from '../../molecules/HomeParallax'
import { DirectionalFade } from '../../molecules/AnimatedBox'

const HeroText = styled.section`
  ${tw`static md:fixed w-full `};
  height: 100%;
  display: block;
  z-index: 5;
  transition: 0.25s;
  top: 0;
`

const HeroContainer = styled.section`
  ${tw`w-full flex flex-col absolute m-auto`}
  top: 50%;
  transform: translateY(-50%);
`

const fadeIn = keyframes`
  0% { opacity: 0 }
  100% { opacity: 1 }
`

const FadeIn = styled.div`
  animation: ${fadeIn} 1.5s 0.25s both;
`

const HomeSlide = ({ content }) => (
  <>
    <HeroText>
      <HeroContainer
        display="flex"
        flexDirection="column"
        position="absolute"
        top="50%"
        m="auto"
        transform="translateY(-50%)"
      >
        <Box
          width={1}
          maxWidth={1600}
          m="auto"
          px={[6, 6, 12, 16, 24]}
          textAlign={['center', 'center', 'left']}
        >
          <FadeIn>
            <Text
              fontWeight="black"
              fontSize={['3xl', '4xl', '6xl']}
              fontColor="secondary.1"
              lineHeight="tight"
              mb={8}
            >
              {content.title}
            </Text>
          </FadeIn>

          <DirectionalFade direction="left" delay={1.25}>
            <Text
              fontFamily="sans"
              fontWeight="thin"
              fontSize={['lg', 'lg', 'xl', '2xl']}
              fontColor="primary.1"
              lineHeight="normal"
              maxWidth={1000}
            >
              {content.description}
            </Text>
          </DirectionalFade>
        </Box>
      </HeroContainer>
    </HeroText>
  </>
)

export default HomeSlide
