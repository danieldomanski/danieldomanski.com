import styled from 'styled-components'
import {
  space,
  typography,
  color,
  layout,
  flexbox,
  border,
  shadow,
  position,
} from 'styled-system'

const Box = styled.div(
  {
    minWidth: 0,
  },
  space,
  color,
  border,
  layout,
  flexbox,
  shadow,
  typography,
  position
)

export default Box
