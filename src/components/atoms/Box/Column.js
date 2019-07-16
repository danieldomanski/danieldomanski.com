import styled from 'styled-components'
import { space, color, layout, flexbox } from 'styled-system'

const Column = styled.div(
  {
    minWidth: 0,
    display: 'flex',
    flexDirection: 'column',
  },
  space,
  color,
  layout,
  flexbox
)

export default Column
