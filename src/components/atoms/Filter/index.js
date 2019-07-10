import React, { useState } from 'react'
import styled, { withTheme } from 'styled-components'
import tw from 'tailwind.macro'

const FilterContainer = styled.li`
  ${tw`font-sans text-sm flex justify-between items-center px-4 py-2 text-primary-100 font-bold mx-1 shadow rounded cursor-pointer`}
  transition: 0.1s ease-in-out;

  &:hover {
    background-color: ${props =>
      props.active ? props.activeHoverColor : props.hoverColor};
  }

  background-color: ${props =>
    props.active ? props.activeBgColor : props.backgroundColor};
`

const Filter = ({ children, theme }) => {
  const [isActive, set] = useState(false)

  const {
    active,
    backgroundColor,
    hoverColor,
  } = theme.components.filters.primary
  const activeBgColor = active.backgroundColor
  const activeHoverColor = active.hoverColor

  return (
    <FilterContainer
      backgroundColor={backgroundColor}
      hoverColor={hoverColor}
      activeBgColor={activeBgColor}
      activeHoverColor={activeHoverColor}
      onClick={() => set(!isActive)}
      active={isActive}
    >
      {children}
    </FilterContainer>
  )
}

export default withTheme(Filter)
