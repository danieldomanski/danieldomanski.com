import React from 'react'
import styled, { keyframes } from 'styled-components'
import Text from '../../atoms/Text'
import Box from '../../atoms/Box'
import HomeParticles from '../../molecules/HomeParticles'
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

/* GIL */

const containerAnim = keyframes`
0% { opacity: 0; transform: translateX(0px) translateY(180px) translateZ(0px) scaleX(1) scaleY(1) scaleZ(1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skewX(0deg) skewY(0deg)  },
100% { opacity: .5; transform: translateX(0px) translateY(0px) translateZ(0px) scaleX(1) scaleY(1) scaleZ(1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skewX(0deg) skewY(0deg) }
`

const textAnim = keyframes`
0% { transform: translateX(-250px); opacity: 0  },
100% { transform: translateX(0px); opacity: 1  }
`

const TitleText = styled.div`
  will-change: transform;
  pointer-events: auto;
  @media screen and (min-width: 768px) {
    animation: ${containerAnim} 1s 0.2s both;
  }
`

const SlideLeft = styled.div`
  will-change: transform;
  pointer-events: auto;
  @media screen and (min-width: 768px) {
    animation: ${textAnim} 0.75s 1.2s both;
  }
`

const HomeSlide = ({ content }) => (
  <>
    <HomeParticles />
    <HeroText>
      <HeroContainer display="flex" flexDirection="column" m="auto">
        <Box
          display="flex"
          flexDirection="column"
          textAlign="center"
          m="auto"
          pt={[8, 8, 0]}
          pb={[16, 16, 0]}
          borderBottom="1px solid rgba(0,0,0,0.05)"
        >
          <Box overflow="hidden">
            <TitleText>
              <Text
                fontWeight="black"
                fontSize={['4xl', '4xl', '6xl']}
                fontColor={['primary.10', 'secondary.10', 'secondary.0']}
                lineHeight="tight"
                mb={8}
              >
                {content.title}
              </Text>
            </TitleText>
          </Box>
          <SlideLeft>
            <Text
              maxWidth={1080}
              fontFamily="sans"
              fontWeight="medium"
              fontSize={['lg', 'lg', 'xl', '2xl']}
              fontColor={['primary.10', 'primary.10', 'secondary.7']}
              lineHeight="relaxed"
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
