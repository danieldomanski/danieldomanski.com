import React from 'react'

import Layout from '../components/templates/Layout'
import useThrottledScroll from '../hooks/useThrottledScroll'
import AsideNavigation from '../components/organisms/AsideNavigation'

import {
  IndexSlidesWrapper,
  IndexSlidesAbsoluteWrapper,
} from '../components/atoms/Wrapper'

const SLIDE_ITEMS = ['services', 'projects', 'me', 'contact']

const Index = () => {
  const [activeSlide, set] = useThrottledScroll(SLIDE_ITEMS.length)

  return (
    <Layout>
      <IndexSlidesWrapper>
        <IndexSlidesAbsoluteWrapper>
          <AsideNavigation
            items={SLIDE_ITEMS}
            activeSlide={activeSlide}
            set={set}
          />
        </IndexSlidesAbsoluteWrapper>
      </IndexSlidesWrapper>
    </Layout>
  )
}

export default Index
