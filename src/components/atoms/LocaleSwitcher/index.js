import React, { useContext, useCallback } from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { LocaleContext } from '../../../context/LocaleContext'

const Container = styled.span`
  ${tw`md:block `};
`

const LocaleSpan = styled.span`
  ${tw`relative font-sans uppercase mx-2 cursor-pointer`}
  color: ${props => (props.active ? '#000' : '#C4C4C4')};
  font-weight: ${props => (props.active ? 600 : 500)};
  transition: 0.25s;

  &:before {
    ${tw`absolute pin-b w-full bg-primary-500`};
    transition: 0.25s;
    width: ${props => (props.active ? '100%' : '0')};
    z-index: -1;
    content: '';
    height: 6px;
  }
`

const Separator = styled.span``

const LocaleSwitcher = () => {
  const [active, set] = useContext(LocaleContext)

  const setLocale = useCallback(() => {
    const locale = active === 'en' ? 'pl' : 'en'
    set(locale)
  }, [active])

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
