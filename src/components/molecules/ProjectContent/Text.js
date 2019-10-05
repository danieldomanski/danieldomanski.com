import React from 'react'
import Text from '../../atoms/Text'

export const ImageCaptionTitle = ({ children }) => (
  <Text
    fontWeight="black"
    fontSize={['3xl', '3xl', '4xl']}
    fontColor="primary.11"
    lineHeight="tight"
    mb={8}
  >
    {children}
  </Text>
)

export const ImageCaptionDescription = ({ children }) => (
  <Text
    fontColor="primary.8"
    fontSize={['lg', 'lg', 'lg', 'xl']}
    fontWeight="medium"
  >
    {children}
  </Text>
)
