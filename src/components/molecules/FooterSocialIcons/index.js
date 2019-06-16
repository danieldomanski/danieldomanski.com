import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { IconLink } from '../../atoms/Link'

const Container = styled.ul`
  ${tw`inline-flex align-items list-no-style p-0 m-0`};
`

const FooterSocialIcons = () => (
  <Container>
    <IconLink icon="github" to="http://github.com" />
    <IconLink icon="linkedin" to="http://linkedin.com" />
  </Container>
)

export default FooterSocialIcons
