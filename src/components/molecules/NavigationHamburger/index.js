import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

const Hamburger = styled.div`
  ${tw`absolute pin-t pin-l`}
  width: 24px;
  height: 18px;
  
  & span {
    ${tw`block mb-1 bg-primary-900`}

    width:  ${props => (props.toggled ? 0 : '24px')};
    height: 2px;
    transition: 0.25s;

    &:nth-child(1){
        transition-delay: ${props => (props.toggled ? '0s' : '0.5s')};
      }
      &:nth-child(2){
        transition-delay: ${props => (props.toggled ? '0.125s' : '0.625s')};
      }
      &:nth-child(3){
        transition-delay: ${props => (props.toggled ? '0.25s' : '0.75s')};
      }
  }

  & span:last-child {
    margin-bottom: 0;
  }
`

const Cross = styled.div`
  ${tw`absolute pin-t pin-l z-50`}
  width: 24px;
  height: 18px;
  transform: rotate(45deg);
  transition: 0.25s;

  & span {
    transition: 0.25s;
  }

  & span:nth-child(1) {
     ${tw`absolute bg-primary-900`}
    height: ${props => (props.toggled ? '24px' : 0)};
    width: 2px;
    top: -3px;
    left: 11px;
    transition-delay: ${props => (props.toggled ? '0.625s' : '0s')};
  }
  & span:nth-child(2) {
    ${tw`absolute bg-primary-700`}
    width: ${props => (props.toggled ? '24px' : 0)};
    height: 2px;
    left: 0;
    top: 8px;
    transition-delay: ${props => (props.toggled ? '0.375s' : '0.25s')};
  }
`

const NavHamburger = ({ isNavOpen }) => (
  <>
    <Hamburger toggled={isNavOpen}>
      <span />
      <span />
      <span />
    </Hamburger>
    <Cross toggled={isNavOpen}>
      <span />
      <span />
    </Cross>
  </>
)

export default NavHamburger
