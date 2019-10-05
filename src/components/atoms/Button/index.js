import React from 'react'
import { css } from 'styled-components'
import Box from '../Box'
import Text from '../Text'
import theme from '../../../config/theme'

const Button = ({ children, ...rest }) => (
  <Box
    as="button"
    display="inline-block"
    py={[4, 6]}
    px={[6, 8]}
    bg="white"
    boxShadow="md"
    border="1.25px solid rgba(12,12,12,1)"
    css={{
      transition: 'all 0.3s ease',
      '&:hover': {
        boxShadow: theme.shadows.lg,
        cursor: 'pointer',
      },
    }}
    {...rest}
  >
    <Text
      fontWeight="bold"
      fontSize={['sm', 'base']}
      fontColor="primary.11"
      style={{ textTransform: 'uppercase' }}
    >
      {children}
    </Text>
  </Box>
)

export default Button
