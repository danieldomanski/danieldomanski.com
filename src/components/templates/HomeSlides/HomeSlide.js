import React from 'react'
import styled, { keyframes } from 'styled-components'
import Text from '../../atoms/Text'
import Box from '../../atoms/Box'
import HomeParticles from '../../molecules/HomeParticles'

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
0% { opacity: 0; transform: translateX(0px) translateY(-15vh) translateZ(0px) scaleX(1) scaleY(1) scaleZ(1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skewX(0deg) skewY(0deg)  },
100% { opacity: 1; transform: translateX(0px) translateY(0px) translateZ(0px) scaleX(1) scaleY(1) scaleZ(1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skewX(0deg) skewY(0deg) }
`

const textAnim = keyframes`
0% { transform: translateX(-250px); opacity: 0  },
100% { transform: translateX(0px); opacity: 1  }
`

const TitleText = styled.div`
  will-change: transform;
  pointer-events: auto;

  @media screen and (min-width: 768px) {
    animation: ${containerAnim} 0.8s cubic-bezier(0.8, 0, 0.16, 1) 0.1s both;
    border-bottom: 0;
  }
`

const SlideLeft = styled.div`
  will-change: transform;
  pointer-events: auto;

  @media screen and (min-width: 768px) {
    animation: ${textAnim} 0.8s cubic-bezier(0.8, 0, 0.16, 1) 1.1s both;
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
          textAlign={['center']}
          m={[0, 0, 0, 0, 0, 'auto']}
          mx={[8, 8, 12, 12, 12, 16]}
          pt={[16, 16, 0]}
          pb={[16, 16, 0]}
          borderBottom={[
            '1px solid rgba(0, 0, 0, 0.1)',
            '1px solid rgba(0, 0, 0, 0.1)',
            0,
          ]}
        >
          <TitleText>
            <Text
              fontFamily="sans"
              fontWeight="black"
              fontSize={['3xl', '4xl', '5xl', '6xl']}
              fontColor={['primary.10', 'primary.10', 'secondary.1']}
              lineHeight="tight"
              style={{ letterSpacing: '-0.04em' }}
              mb={[4, 6, 6]}
            >
              {content.title}
            </Text>
          </TitleText>
          <SlideLeft>
            <Text
              maxWidth={[400, 600, 800]}
              fontWeight="medium"
              fontSize={['lg', 'lg', 'xl']}
              fontColor={['primary.10', 'primary.10', 'secondary.3']}
              lineHeight="relaxed"
              style={{ letterSpacing: '-0.02em' }}
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
