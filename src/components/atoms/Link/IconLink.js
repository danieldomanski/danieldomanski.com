import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Icon from '../Icon'

const IconWrapper = styled.a`
  ${tw`cursor-pointer`};
`
const IconLink = ({ icon, to, ...props }) => (
  <IconWrapper href={to} target="_blank" rel="noopener noreferrer">
    <Icon icon={icon} {...props} />
  </IconWrapper>
)

export default IconLink
