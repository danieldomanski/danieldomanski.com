import styled from 'styled-components'
import {
  space,
  typography,
  color,
  layout,
  flexbox,
  shadow,
  position,
} from 'styled-system'

const Box = styled.div(
  {
    minWidth: 0,
    inViewport: false,
  },
  space,
  color,
  layout,
  flexbox,
  shadow,
  typography,
  position
)

export default Box
