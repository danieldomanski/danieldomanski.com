import React from 'react'
import styled from 'styled-components'
import useInterval from '../../../hooks/useInterval'

const RowAlligned = styled.nav`
  display: flex;
  align-items: center;
  font-family: sans-serif;
  position: absolute;
  bottom: 7.5%;
  left: 0;
`

const Rect = styled.div`
  min-width: 70px;
  position: relative;
  padding-left: 2em;
  color: #393939;
  cursor: pointer;
  margin-right: 3em;
  font-family: 'Playfair Display', serif;

  &:before {
    content: '';
    width: ${props => (props.active ? '100%' : 0)};
    height: 8px;
    display: block;
    background-color: #bfbfbf;
    position: absolute;
    left: 0;
    bottom: -8px;
    transition: width 0.5s;
    transition-timing-function: cubic-bezier(0.5, 0.02, 0.1, 1);
    z-index: -1;
  }
`

const Wrapper = styled.div``

const RowNumber = styled.span`
  position: absolute;
  left: 0;
  top: 0;
  font-size: 48px;
  font-weight: 900;
  z-index: -1;
  color: #eeeeee;
`

const RowText = styled.p`
  font-size: 1.125em;
  margin: 0;
  margin-top: 1.5em;
`

const navigationItems = [
  'Website design',
  'Mobile ready',
  'Web apps development',
]

const TextSlider = ({ active, set }) => {
  useInterval(
    () => (active === navigationItems.length - 1 ? set(0) : set(active + 1)),
    10000
  )

  const onClickHandler = idx => set(idx)

  return (
    <RowAlligned>
      {navigationItems.map((item, idx) => (
        <Rect active={active === idx} onClick={() => onClickHandler(idx)}>
          <Wrapper>
            <RowNumber>{`0${idx + 1}`}</RowNumber>
            <RowText>{item}</RowText>
          </Wrapper>
        </Rect>
      ))}
    </RowAlligned>
  )
}

export default TextSlider
