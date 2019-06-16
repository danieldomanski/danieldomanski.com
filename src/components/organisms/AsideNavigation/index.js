import React, { useContext } from 'react'
import styled from 'styled-components'
import { SlidesContext } from '../../../context/SlidesContext'

const AsideContainer = styled.aside`
  ${tw`absolute pin-r m-0 flex flex-col items-center`};
  bottom: 3em;
  transform: translateY(-${props => props.idx * 35}px);
  transition: 0.25s;
`

const NavList = styled.ul`
  ${tw`flex flex-col items-center mb-4 p-0`};
  list-style: none;
  margin-bottom: 1.125em;
`

const NavListItem = styled.li`
  ${tw`cursor-pointer py-4 text-sm xl:text-base`};
  transition: 0.25s;
  color: ${props => (props.active ? '#000' : '#C4C4C4')};
  font-weight: ${props => (props.active ? 900 : 500)};
`

const Line = styled.div`
  ${tw`block bg-primary-800 h-12 mt-4`};
  width: 1px;
`

const BeforeText = styled.h2`
  ${tw`cursor-pointer text-lg lg:text-2xl`};
  transform: rotate(90deg);
  font-weight: ${props => (props.active ? 900 : 500)};
`

const Before = styled.div`
  ${tw`flex flex-col items-center`};
`

const AsideNav = ({ items, onSlideClick }) => {
  const activeSlide = useContext(SlidesContext)

  return (
    <AsideContainer idx={activeSlide}>
      <NavList>
        {items.map((item, idx) => {
          if (idx === 0) {
            return (
              <Before>
                <BeforeText
                  active={activeSlide === 0}
                  onClick={() => onSlideClick(0)}
                >
                  {item}
                </BeforeText>
                <Line />
              </Before>
            )
          }
          return (
            <NavListItem
              active={activeSlide === idx}
              onClick={() => {
                onSlideClick(idx)
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
