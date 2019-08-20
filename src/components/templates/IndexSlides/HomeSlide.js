import React from 'react'
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
  ${tw`w-full flex flex-col md:absolute m-auto`}

  @media screen and (min-width: 768px) {
    transform: translateY(-50%);
    top: 50%;
  }
`

const fadeIn = keyframes`
  0% { opacity: 0 }
  100% { opacity: 1 }
`

const slideLeft = keyframes`
  0% { opacity: 0; transform: translateX(-60px)  },
  100% { opacity: 1; transform: translateX(0) }
`

const FadeIn = styled.div`
  @media screen and (min-width: 768px) {
    animation: ${fadeIn} 1.5s 0.25s both;
  }
`

const SlideLeft = styled.div`
  @media screen and (min-width: 768px) {
    animation: ${slideLeft} 1.5s 1.25s both;
  }
`

const HomeSlide = ({ content }) => (
  <>
    <HeroText>
      <HeroContainer display="flex" flexDirection="column" m="auto">
        <Box
          maxWidth={1400}
          m="auto 0"
          mx={[6, 6, 12]}
          pt={[8, 8, 0]}
          pb={[16, 16, 0]}
          textAlign={['left']}
          borderBottom="1px solid rgba(0,0,0,0.05)"
        >
          <FadeIn>
            <Text
              fontWeight="black"
              fontSize={['4xl', '4xl', '6xl']}
              fontColor={['primary.10', 'secondary.10', 'secondary.0']}
              lineHeight="tight"
              mb={8}
            >
              {content.title}
            </Text>
          </FadeIn>
          <SlideLeft>
            <Text
              fontFamily="sans"
              fontWeight="medium"
              fontSize={['lg', 'lg', 'xl', '2xl']}
              fontColor={['primary.10', 'primary.10', 'secondary.0']}
              lineHeight="relaxed"
              maxWidth={1000}
            >
              {content.description}
            </Text>
          </SlideLeft>
        </Box>
      </HeroContainer>
    </HeroText>
  </>
)

export default HomeSlide
