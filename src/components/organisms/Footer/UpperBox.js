import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Box from '../../atoms/Box'
import Text from '../../atoms/Text'
import { CollapsableLink } from '../../atoms/Link'
/*
const UpperWrapper = styled(ContentWrapper)`
  ${tw`flex flex-col justify-center items-center h-full text-center px-12 xl:px-32 py-8`}
`
*/
const ItalicSpan = styled.span`
  ${tw`italic`}
`

const UpperRect = () => (
  <Box
    width={1}
    height="100%"
    display="flex"
    bg="#F0F0F0"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    textAlign="center"
    px={[12, 12, 12, 32]}
    py={12}
  >
    <Text
      fontColor="primary.8"
      fontSize={['4xl', '5xl']}
      fontWeight="bold"
      mb={[0, 4]}
    >
      Let’s create something <ItalicSpan>beautiful!</ItalicSpan>
    </Text>
    <Text
      fontFamily="sans"
      fontSize={['lg']}
      fontColor="primary.6"
      my={[4]}
      maxWidth={800}
      lineHeight="relaxed"
    >
      You may find me on social networks given below, or
      <CollapsableLink fontSize={['lg']} mx={1} variant="accent">
        e-mail me directly.
      </CollapsableLink>
      If you're a digital or design agency, recruiter or just interested in a
      hard copy of my resumé as a PDF,
      <CollapsableLink fontSize={['lg']} mx={1} variant="accent">
        download it here.
      </CollapsableLink>
    </Text>
  </Box>
)

export default UpperRect
