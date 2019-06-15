import React, { useState } from 'react'

import Layout from '../components/templates/Layout'
import useThrottledScroll from '../hooks/useThrottledScroll'
import AsideNavigation from '../components/organisms/AsideNavigation'
import IndexSlides from '../components/templates/IndexSlides'

import {
  IndexSlidesWrapper,
  IndexSlidesAbsoluteWrapper,
} from '../components/atoms/Wrapper'

const SLIDE_ITEMS = ['services', 'projects', 'me', 'contact']

const Index = () => {
  const [activeSlide, setSlide] = useThrottledScroll(SLIDE_ITEMS.length)
  const [slidePosition, setPosition] = useState(0)

  return (
    <Layout>
      <IndexSlidesWrapper>
        <IndexSlidesAbsoluteWrapper>
          <IndexSlides
            activeSlide={activeSlide}
            slidePosition={slidePosition}
          />
          <AsideNavigation
            items={SLIDE_ITEMS}
            slide={{ activeSlide, setSlide }}
            position={{ slidePosition, setPosition }}
          />
        </IndexSlidesAbsoluteWrapper>
      </IndexSlidesWrapper>
    </Layout>
  )
}

export default Index
