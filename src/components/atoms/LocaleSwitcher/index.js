import React, { useContext, useCallback } from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { LocaleContext } from '../../../context/LocaleContext'

const Container = styled.span`
  ${tw`hidden md:block mx-12`};
`

const LocaleSpan = styled.span`
  ${tw`mx-2 cursor-pointer`}
  font-weight: ${props => (props.active ? 600 : 500)};
`

const Separator = styled.span``

const LocaleSwitcher = () => {
  const [active, set] = useContext(LocaleContext)

  const setLocale = useCallback(
    () => {
      const locale = active === 'en' ? 'pl' : 'en'
      set(locale)
    },
    [active]
  )

  return (
    <Container>
      <LocaleSpan active={active === 'en'} onClick={setLocale}>
        en
      </LocaleSpan>
      <Separator>/</Separator>
      <LocaleSpan active={active === 'pl'} onClick={setLocale}>
        pl
      </LocaleSpan>
    </Container>
  )
}

export default LocaleSwitcher
