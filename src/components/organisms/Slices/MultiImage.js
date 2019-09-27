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

const MultiImage = ({ data, align }) => (
  <Box display="flex" flexDirection="column" my={[8, 24]}>
    <Box
      display="flex"
      flexDirection="column"
      maxWidth={686}
      mx="auto"
      textAlign="center"
      my={[8, 12]}
    >
      <ImageCaptionTitle>{data.title}</ImageCaptionTitle>
      <ImageCaptionDescription>{data.description}</ImageCaptionDescription>
    </Box>
    <Box
      display="flex"
      justifyContent="space-around"
      flexWrap={['wrap', 'wrap', 'nowrap']}
    >
      {data.items.map((img, idx) => {
        return (
          <Box
            width={[1, 1]}
            mr={idx !== data.items.length - 1 ? [0, 0, 12] : 0}
            mb={idx !== data.items.length - 1 ? [8, 8, 0] : 0}
            maxHeight={[360, 400, 500]}
          >
            <Image input={img.localFile} fit="contain"></Image>
          </Box>
        )
      })}
    </Box>
  </Box>
)

export default MultiImage
