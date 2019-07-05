import React, { useState } from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { color } from '../../helpers/styles'

const FilterContainer = styled.li`
  ${tw`font-sans text-sm xl:text-base flex justify-between items-center px-4 py-2 text-primary-100 mx-1 shadow rounded cursor-pointer`}
  transition: 0.1s ease-in-out;

  &:hover {
    background-color: ${props =>
      props.active ? color('primary-900') : color('primary-700')};
  }

  background-color: ${props =>
    props.active ? color('primary-800') : color('primary-600')};
`

const Filter = ({ children }) => {
  const [active, set] = useState(false)

  return (
    <FilterContainer onClick={() => set(!active)} active={active}>
      {children}
    </FilterContainer>
  )
}

export default Filter
