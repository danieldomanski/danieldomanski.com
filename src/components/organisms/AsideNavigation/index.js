import React from 'react'
import styled from 'styled-components'

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

const AsideNav = ({ items, slide, position }) => {
  const { activeSlide, setSlide } = slide
  const { slidePosition, setPosition } = position

  return (
    <AsideContainer idx={activeSlide}>
      <Before>
        <BeforeText active={activeSlide === 0} onClick={() => setSlide(0)}>
          ddev
        </BeforeText>
        <Line />
      </Before>
      <NavList>
        {items.map((item, idx) => (
          <NavListItem
            active={activeSlide === idx + 1}
            onClick={() => {
              setSlide(idx)
            }}
          >
            {item}
          </NavListItem>
        ))}
      </NavList>
    </AsideContainer>
  )
}

export default AsideNav
