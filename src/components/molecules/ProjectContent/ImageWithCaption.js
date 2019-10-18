import React from 'react'
import Box from '../../atoms/Box'
import Image from '../../atoms/Image'
import { ImageCaptionTitle, ImageCaptionDescription } from './Text'

const ImageWithCaption = ({ data, align }) => {
  const withCaption = data.title || data.description
  const imageDimensions = withCaption ? [1, 1, 2 / 3] : [1]

  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection={align === 'left' ? 'row' : 'row-reverse'}
      flexWrap={['wrap', 'wrap', 'nowrap']}
      mt={[8, 16]}
    >
      {withCaption ? (
        <Box
          display="flex"
          justifyContent="center"
          flexDirection="column"
          mb={[8, 12, 0]}
          width={[1, 1, 1 / 3]}
          mr={align === 'left' ? [0, 0, 8] : 0}
          ml={align === 'left' ? 0 : [0, 0, 16]}
          textAlign={['center', 'center', 'left']}
        >
          <ImageCaptionTitle>{data.title}</ImageCaptionTitle>
          <ImageCaptionDescription>{data.description}</ImageCaptionDescription>
        </Box>
      ) : null}

      <Box width={imageDimensions} maxHeight={[450, 500, 500, 600]}>
        <Image input={data.localFile} fit="contain" width="100%" boxShadow />
      </Box>
    </Box>
  )
}

export default ImageWithCaption
