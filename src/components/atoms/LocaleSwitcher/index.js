import React, { useContext, useCallback } from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'
import tw from 'tailwind.macro'
import TextHighlight from '../TextHighlight'
import { LocaleContext } from '../../../context/LocaleContext'

const Container = styled.span`
  ${tw`hidden md:block`};
`

const LocaleSpan = styled.span`
  ${tw`relative font-sans uppercase mx-2 cursor-pointer`}

  color: ${props => props.fontColor};
  font-weight: ${props => (props.active ? 600 : 500)};
  transition: 0.25s;

  &:before {
    ${tw`absolute pin-b w-full`};
    background-color: ${props => props.underlineColor};
    width: ${props => (props.active ? '100%' : '0')};
    content: '';
    height: 6px;
    transition: 0.25s;
    z-index: -1;
  }

  &:focus {
    box-shadow: 0px 0px 0px 3px rgba(0, 0, 0, 0.15);
  }
`

const Separator = styled.span``

const LocaleSwitcher = ({ variant, theme }) => {
  const [active, set] = useContext(LocaleContext)
  const { color, underlineColor } = theme.components.localeSwitcher[variant]
  console.log({ color, underlineColor })
  const setLocale = useCallback(() => {
    const locale = active === 'en' ? 'pl' : 'en'
    set(locale)
  }, [active])

  return (
    <Container>
      <LocaleSpan
        fontColor={color}
        underlineColor={underlineColor}
        active={active === 'en'}
        onClick={setLocale}
      >
        en
      </LocaleSpan>
      <Separator>/</Separator>
      <LocaleSpan
        fontColor={color}
        underlineColor={underlineColor}
        active={active === 'pl'}
        onClick={setLocale}
      >
        pl
      </LocaleSpan>
    </Container>
  )
}

LocaleSwitcher.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary']),
}

LocaleSwitcher.defaultProps = {
  variant: 'primary',
}

export default withTheme(LocaleSwitcher)
