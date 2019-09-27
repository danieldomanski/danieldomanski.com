import React from 'react'
import Box from '../../atoms/Box'
import Text from '../../atoms/Text'
import Image from '../../atoms/Image'

const ImageCaptionTitle = ({ children }) => (
  <Text
    fontWeight="black"
    fontSize={['2xl', '4xl']}
    fontColor="primary.11"
    mb={4}
  >
    {children}
  </Text>
)

const ImageCaptionDescription = ({ children }) => (
  <Text fontColor="primary.8" fontSize={['lg', 'lg', 'xl']} fontWeight="medium">
    {children}
  </Text>
)

const ImageWithCaption = ({ data, align }) => (
  <Box
    display="flex"
    flexDirection={align === 'left' ? 'row' : 'row-reverse'}
    flexWrap={['wrap', 'wrap', 'nowrap']}
    my={[8, 24]}
  >
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      width={[1, 1, 1 / 3]}
      mb={[8, 12, 0]}
      maxWidth={800}
      mr={align === 'left' ? 16 : 0}
      ml={align === 'left' ? 0 : 16}
    >
      <ImageCaptionTitle>{data.title}</ImageCaptionTitle>
      <ImageCaptionDescription>{data.description}</ImageCaptionDescription>
    </Box>
    <Box width={[1, 1, 2 / 3]} maxHeight={500}>
      <Image
        input={data.localFile}
        fit="contain"
        width="100%"
        boxShadow
      ></Image>
    </Box>
  </Box>
)

export default ImageWithCaption
