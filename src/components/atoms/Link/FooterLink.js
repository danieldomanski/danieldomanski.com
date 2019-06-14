import { Link } from 'gatsby'
import styled from 'styled-components'
import tw from 'tailwind.macro'

export default styled(Link)`
  ${tw`relative no-underline text-primary-800 font-bold`};

  &:after {
    content: '';
    height: 8px;
    bottom: 4px;
    z-index: -1;
    ${tw`absolute block bg-primary-300 w-full `};
  }
`
