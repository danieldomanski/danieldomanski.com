import React from 'react'
import styled from 'styled-components'
import useSlidesClick from '../../../hooks/useSlidesClick'

const AsideContainer = styled.aside`
  ${tw`absolute pin-r inline-block`};
  max-height: 300px;
  bottom: 0;
  top: 0;
  right: -2em;
  margin: auto;
  transform: translateY(-${props => props.idx * 30}px);
  transition: 0.25s;
`

const NavList = styled.ul`
  ${tw`flex flex-col items-center mb-4 p-0`};
  list-style: none;
  margin-bottom: 1.125em;
`

const NavListItem = styled.li`
  ${tw`cursor-pointer py-4 text-sm`};
  transition: 0.25s;
  color: ${props => (props.active ? '#000' : '#C4C4C4')};
  font-weight: ${props => (props.active ? 900 : 500)};
`

const Line = styled.div`
  ${tw`block bg-primary-800 h-12 mt-4`};
  width: 1px;
`

const BeforeText = styled.h2`
  ${tw`cursor-pointer text-lg lg:text-xl font-bold`};
  transform: rotate(90deg);
  color: ${props => (props.active ? '#000' : '#C4C4C4')};
`

const Before = styled.div`
  ${tw`flex flex-col items-center`};
`

const AsideNav = ({ items, onSlideClick }) => {
  const [active, clickHandler] = useSlidesClick()

  return (
    <AsideContainer idx={active}>
      <NavList>
        {items.map((item, idx) => {
          if (idx === 0) {
            return (
              <Before>
                <BeforeText
                  active={active === 0}
                  onClick={() => clickHandler(0)}
                >
                  {item}
                </BeforeText>
                <Line />
              </Before>
            )
          }
          return (
            <NavListItem
              active={active === idx}
              onClick={() => {
                clickHandler(idx)
              }}
            >
              {item}
            </NavListItem>
          )
        })}
      </NavList>
    </AsideContainer>
  )
}

export default AsideNav
