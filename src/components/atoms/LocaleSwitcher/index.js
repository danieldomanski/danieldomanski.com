import React, { useContext, useCallback } from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'
import tw from 'tailwind.macro'
import { LocaleContext } from '../../../context/LocaleContext'
import Box from '../Box'

const LocaleSpan = styled.span`
  ${tw`relative font-sans uppercase mr-1 cursor-pointer text-sm`}

  &:last-of-type {
    ${tw`ml-1 mr-0`}
  }

  color: ${props => (props.active ? '#111' : '#666')};
  font-weight: ${props => (props.active ? 900 : 400)};
  transition: 0.25s;

  &:focus {
    box-shadow: 0px 0px 0px 3px rgba(0, 85, 255, 0.5);
  }
`

const Separator = styled.span``

const LocaleSwitcher = ({ theme }) => {
  const [active, set] = useContext(LocaleContext)

  const setLocale = useCallback(() => {
    const locale = active === 'en' ? 'pl' : 'en'
    set(locale)
  }, [active])

  return (
    <Box display="flex" alignItems="center" order="2">
      <LocaleSpan active={active === 'en'} onClick={setLocale}>
        en
      </LocaleSpan>
      <Separator>/</Separator>
      <LocaleSpan active={active === 'pl'} onClick={setLocale}>
        pl
      </LocaleSpan>
    </Box>
  )
}

LocaleSwitcher.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary']),
}

LocaleSwitcher.defaultProps = {
  variant: 'primary',
}

export default withTheme(LocaleSwitcher)
