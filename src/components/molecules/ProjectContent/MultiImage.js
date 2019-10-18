import React from 'react'
import Box from '../../atoms/Box'
import { ImageCaptionTitle, ImageCaptionDescription } from './Text'
import Image from '../../atoms/Image'

const MultiImage = ({ data }) => {
  const withCaption = data.title || data.description

  return (
    <Box display="flex" flexDirection="column" mt={[8, 16]}>
      {withCaption ? (
        <Box
          display="flex"
          flexDirection="column"
          maxWidth={686}
          mx="auto"
          textAlign="center"
          mb={[8, 12]}
        >
          <ImageCaptionTitle>{data.title}</ImageCaptionTitle>
          <ImageCaptionDescription>{data.description}</ImageCaptionDescription>
        </Box>
      ) : null}
      <Box
        display="flex"
        justifyContent="space-around"
        flexWrap={['wrap', 'wrap', 'nowrap']}
      >
        {data.items.map((img, idx) => (
          <Box
            key={img.title}
            width={[1, 1]}
            mr={idx !== data.items.length - 1 ? [0, 0, 12] : 0}
            mb={idx !== data.items.length - 1 ? [8, 8, 0] : 0}
            maxHeight={[350, 400, 450, 500]}
          >
            <Image input={img.localFile} fit="contain" />
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default MultiImage
