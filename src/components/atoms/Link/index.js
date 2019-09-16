import styled from 'styled-components'
import { Link } from 'gatsby'
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

const Link = styled(Link)(
  space,
  color,
  border,
  layout,
  flexbox,
  shadow,
  typography,
  position
)

export default Link
