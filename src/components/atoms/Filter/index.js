import React, { useState } from 'react'
import { withTheme } from 'styled-components'
import css from '@styled-system/css'
import Box from '../Box'
import Text from '../Text'

const Filter = ({ children, theme, updateFilter, slug }) => {
  const [isActive, set] = useState(false)

  const { primary } = theme.components.filters
  const { active } = theme.components.filters.primary

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      px={4}
      py={2}
      mr={3}
      mb={[2, 2, 0]}
      bg={isActive ? active.backgroundColor : primary.backgroundColor}
      css={css({
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: isActive ? active.hoverColor : primary.hoverColor,
        },
      })}
      onClick={() => {
        updateFilter(slug)
        set(!isActive)
      }}
    >
      <Text
        fontColor={isActive ? active.color : primary.color}
        fontWeight="medium"
        fontSize={['xs', 'sm']}
      >
        {children}
      </Text>
    </Box>
  )
}

export default withTheme(Filter)
