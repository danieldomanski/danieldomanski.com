import React, { useState } from 'react'
import { withTheme } from 'styled-components'
import css from '@styled-system/css'
import Box from '../Box'

const Filter = ({ children, theme, updateFilter, slug }) => {
  const [isActive, set] = useState(false)

  const { primary } = theme.components.filters
  const { active } = theme.components.filters.primary

  const onClickHandler = () => {
    updateFilter(slug)
    set(!isActive)
  }

  return (
    <Box
      fontFamily="sans"
      px={4}
      py={2}
      mr={3}
      mb={[2, 2, 0]}
      color={isActive ? active.color : primary.color}
      fontWeight="medium"
      fontSize={['xs', 'sm']}
      bg={isActive ? active.backgroundColor : primary.backgroundColor}
      css={css({
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: isActive ? active.hoverColor : primary.hoverColor,
        },
      })}
      onClick={onClickHandler}
    >
      {children}
    </Box>
  )
}

export default withTheme(Filter)
