import React, { useState } from 'react'
import styled, { withTheme } from 'styled-components'
import tw from 'tailwind.macro'

const FilterContainer = styled.li`
  ${tw`font-sans text-sm flex justify-between items-center px-4 py-2 font-bold mr-2 mb-2 rounded cursor-pointer`}
  transition: 0.1s ease-in-out;
  color: ${props => (props.active ? props.activeColor : props.color)};
  border: 1px solid ${props => props.hoverColor};

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
    color,
    backgroundColor,
    hoverColor,
  } = theme.components.filters.primary
  const activeBgColor = active.backgroundColor
  const activeHoverColor = active.hoverColor
  const activeColor = active.color

  return (
    <FilterContainer
      color={color}
      backgroundColor={backgroundColor}
      hoverColor={hoverColor}
      activeBgColor={activeBgColor}
      activeHoverColor={activeHoverColor}
      activeColor={activeColor}
      onClick={() => set(!isActive)}
      active={isActive}
    >
      {children}
    </FilterContainer>
  )
}

export default withTheme(Filter)
