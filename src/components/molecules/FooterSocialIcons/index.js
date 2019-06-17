import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import tw from 'tailwind.macro'
import { IconLink } from '../../atoms/Link'

const hiddeOnMobileCss = css`
  ${tw`hidden md:inline-flex`};
`

const Container = styled.ul`
  ${tw`inline-flex align-items list-no-style p-0 m-0 py-2 md:py-0`};
  ${props => (props.hiddenOnMobile ? hiddeOnMobileCss : null)};
`

const FooterSocialIcons = ({ hiddenOnMobile }) => (
  <Container hiddenOnMobile={hiddenOnMobile}>
    <IconLink icon="github" to="http://github.com" width="21px" />
    <IconLink icon="linkedin" to="http://linkedin.com" width="21px" />
  </Container>
)

FooterSocialIcons.propTypes = {
  hiddenOnMobile: PropTypes.bool,
}

FooterSocialIcons.defaultProps = {
  hiddenOnMobile: false,
}

export default FooterSocialIcons
