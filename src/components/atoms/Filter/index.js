import React, { useState } from 'react'
import styled, { withTheme } from 'styled-components'
import tw from 'tailwind.macro'

const FilterContainer = styled.li`
  ${tw`font-sans text-sm  flex justify-between items-center px-4 py-2 font-medium mr-2 mb-2 rounded cursor-pointer`}
  transition: 0.1s ease-in-out;
  color: ${props =>
    props.active ? props.config.active.color : props.config.color};

  &:hover {
    background-color: ${props =>
      props.active ? props.config.active.hoverColor : props.config.hoverColor};
  }

  background-color: ${props =>
    props.active
      ? props.config.active.backgroundColor
      : props.config.backgroundColor};
`

const Filter = ({ children, theme, updateFilter, slug }) => {
  const [isActive, set] = useState(false)

  return (
    <FilterContainer
      config={theme.components.filters.primary}
      onClick={() => {
        updateFilter(slug)
        set(!isActive)
      }}
      active={isActive}
    >
      {children}
    </FilterContainer>
  )
}

export default withTheme(Filter)
