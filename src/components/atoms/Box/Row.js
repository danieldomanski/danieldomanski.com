import styled from 'styled-components'
import { space, color, layout, flexbox } from 'styled-system'

const Row = styled.div(
  {
    minWidth: 0,
    display: 'flex',
  },
  space,
  color,
  layout,
  flexbox
)

export default Row
