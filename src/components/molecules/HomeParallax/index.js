import React, { useContext } from 'react'
import styled from 'styled-components'

import Layer1 from '../../../images/Layer1.png'
import Layer2 from '../../../images/Layer2.png'
import Layer3 from '../../../images/Layer3.png'

import { ScrollContext } from '../../../context/ScrollContext'

const ParallaxContainer = styled.div`
  height: 100%;
`

const Layer = styled.img`
  position: fixed;
  top: 0;
  background-position: center !important;
  transform: translateY(0px);
  height: 100%;
  width: 100%;
`

const calculateTranslate = (offset, idx) =>
  `translateY(-${(offset * idx) / 3}px)`

const HomeParallax = () => {
  const [scroll] = useContext(ScrollContext)
  console.log({ scroll })

  return (
    <ParallaxContainer>
      <Layer src={Layer1} />
      <Layer
        src={Layer2}
        style={{ transform: `${calculateTranslate(scroll.y, 1)}` }}
      />
      <Layer
        src={Layer3}
        style={{ transform: `${calculateTranslate(scroll.y, 2)}` }}
      />
    </ParallaxContainer>
  )
}

export default HomeParallax
