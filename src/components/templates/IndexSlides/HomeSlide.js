import React, { useState } from 'react'
import styled from 'styled-components'
import VisibilitySensor from 'react-visibility-sensor'
import Text from '../../atoms/Text'
import Box from '../../atoms/Box'
import HomeParallax from '../../molecules/HomeParallax'

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

const HomeSlide = ({ content }) => (
  <>
    <HomeParallax />
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
          maxWidth={1400}
          m="auto"
          px={[6, 6, 12, 16, 24]}
          textAlign={['center', 'center', 'left']}
        >
          <Text
            fontWeight="black"
            fontSize={['3xl', '4xl', '6xl']}
            fontColor="primary.1"
            lineHeight="tight"
            mb={8}
          >
            {content.title}
          </Text>
          <Text
            fontWeight="thin"
            fontSize={['lg', 'lg', 'xl', '2xl']}
            fontColor="primary.3"
            lineHeight="normal"
            maxWidth={1000}
          >
            {content.description}
          </Text>
        </Box>
      </HeroContainer>
    </HeroText>
  </>
)

export default HomeSlide
