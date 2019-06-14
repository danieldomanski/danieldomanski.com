import styled from 'styled-components'
import tw from 'tailwind.macro'

export default styled.div`
  ${tw`w-full absolute`};
  top: 50%;
  transform: translateY(-50%);
  opacity: ${props => (props.active ? 1 : 0)};
`
