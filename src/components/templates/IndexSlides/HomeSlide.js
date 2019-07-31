import React, { useContext } from 'react'
import styled from 'styled-components'
import Text from '../../atoms/Text'
import TextHighlight from '../../atoms/TextHighlight'
import useWindowSize from '../../../hooks/useWindowSize'
import { ScrollContext } from '../../../context/ScrollContext'
import Paragraph from '../../atoms/Paragraph'
import Box from '../../atoms/Box'

const HeroText = styled.section`
  ${tw`static md:fixed w-full `};
  height: calc(100% - 120px);
  display: ${props => (props.visible ? 'block' : 'none')};
  z-index: 4;
  transition: 0.25s;
`

const HeroContainer = styled.section`
  ${tw`w-full flex flex-col absolute m-auto`}
  top: 50%;
  transform: translateY(-50%);
`

const HomeSlide = () => {
  const windowSize = useWindowSize()
  const [scroll] = useContext(ScrollContext)
  const isMobile = windowSize.width < 768

  if (isMobile) {
    return (
      <Box
        maxWidth={1600}
        m="auto"
        px={[6, 6, 12, 16, 24]}
        py={24}
        bg="#E0E0E0"
        textAlign={['center', 'center', 'left']}
      >
        <Text
          fontWeight="black"
          fontSize={['4xl', '4xl', '6xl']}
          fontColor="primary.8"
          lineHeight="tight"
          mb={8}
        >
          Full-Stack Web Developer.
        </Text>
        <Text
          fontFamily="sans"
          fontWeight="normal"
          fontSize={['lg', 'lg', 'xl', '2xl']}
          fontColor="primary.6"
          lineHeight="relaxed"
          maxWidth={1000}
        >
          Hello! My name is Daniel and I have been creating for the Web for the
          past 2 years. My job is to help your business grow by providing modern
          digital products that people enjoy.
        </Text>
      </Box>
    )
  }

  return (
    <>
      <HeroText visible={scroll.y <= windowSize.height}>
        <HeroContainer
          display="flex"
          flexDirection="column"
          position="absolute"
          top="50%"
          m="auto"
          transform="translateY(-50%)"
        >
          <Box
            maxWidth={1600}
            m="auto"
            px={[8, 12, 16, 24]}
            textAlign={['center', 'center', 'left']}
          >
            <Text
              fontWeight="black"
              fontSize={['3xl', '4xl', '6xl']}
              fontColor="primary.8"
              lineHeight="tight"
              mb={8}
            >
              Full-Stack Web Developer.
            </Text>
            <Text
              fontFamily="sans"
              fontWeight="normal"
              fontSize={['lg', 'lg', 'xl', '2xl']}
              fontColor="primary.6"
              lineHeight="relaxed"
              maxWidth={1000}
            >
              Hello! My name is Daniel and I have been creating for the Web for
              the past 2 years. My job is to help your business grow by
              providing modern digital products that people enjoy.
            </Text>
          </Box>
        </HeroContainer>
      </HeroText>
    </>
  )
}

export default HomeSlide
