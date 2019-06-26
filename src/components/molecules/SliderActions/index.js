import React, { useCallback } from 'react'
import styled from 'styled-components'
import Icon from '../../atoms/Icon'

const Container = styled.section`
  ${tw`absolute pin-l flex`};
  bottom: -2em;
  left: -4.5em;
  box-sizing: border-box;
`

const Half = styled.div`
  ${tw`w-1/2 p-8  bg-white`};
  transition: 0.25s;

  &:hover {
    ${tw`bg-primary-100`}
  }

  &:first-of-type {
    svg {
      transform: rotate(180deg);
    }
  }
`
const SliderActions = React.memo(({ active, projectsLength, set }) => {
  const decrement = useCallback(
    () => (active === 0 ? set(projectsLength - 1) : set(active - 1)),
    [active]
  )

  const increment = useCallback(
    () => (active === projectsLength - 1 ? set(0) : set(active + 1)),
    [active]
  )

  return (
    <Container>
      <Half onClick={decrement}>
        <Icon icon="caret" width={6} />
      </Half>
      <Half onClick={increment}>
        <Icon icon="caret" width={6} />
      </Half>
    </Container>
  )
})

export default SliderActions
