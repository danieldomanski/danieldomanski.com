import React, { useContext } from 'react'
import styled from 'styled-components'
import Text from '../../atoms/Text'
import useWindowSize from '../../../hooks/useWindowSize'
import { ScrollContext } from '../../../context/ScrollContext'
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

const HomeSlide = ({ content }) => {
  const windowSize = useWindowSize()
  const [scroll] = useContext(ScrollContext)
  const isMobile = windowSize.width < 768

  if (isMobile) {
    return (
      <Box
        maxWidth={1200}
        m="auto"
        mx={[6, 6, 12, 16, 24]}
        py={16}
        borderBottom="1px solid rgba(0,0,0,0.1)"
      >
        <Text
          fontWeight="black"
          fontSize={['4xl', '4xl', '6xl']}
          fontColor="primary.8"
          lineHeight="tight"
          mb={8}
        >
          {content.title}
        </Text>
        <Text
          fontFamily="sans"
          fontWeight="normal"
          fontSize={['lg', 'lg', 'xl', '2xl']}
          fontColor="primary.6"
          lineHeight="relaxed"
          maxWidth={1000}
        >
          {content.description}
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
            maxWidth={1400}
            m="auto"
            px={[6, 6, 12, 16, 24]}
            textAlign={['center', 'center', 'left']}
          >
            <Text
              fontWeight="black"
              fontSize={['3xl', '4xl', '6xl']}
              fontColor="primary.8"
              lineHeight="tight"
              mb={8}
            >
              {content.title}
            </Text>
            <Text
              fontFamily="sans"
              fontWeight="normal"
              fontSize={['lg', 'lg', 'xl', '2xl']}
              fontColor="primary.6"
              lineHeight="relaxed"
              maxWidth={1000}
            >
              {content.description}
            </Text>
          </Box>
        </HeroContainer>
      </HeroText>
    </>
  )
}

export default HomeSlide
