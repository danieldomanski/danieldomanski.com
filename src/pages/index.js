import React from 'react'

import Layout from '../components/templates/Layout'
import AsideNavigation from '../components/organisms/AsideNavigation'
import IndexSlides from '../components/templates/IndexSlides'
import SlidesProvider from '../context/SlidesContext'
import IndexHeroMobile from '../components/molecules/IndexHeroMobile'
import IndexProjects from '../components/organisms/IndexProjects'
import useWindowSize from '../hooks/useWindowSize'

import {
  IndexSlidesWrapper,
  IndexSlidesAbsoluteWrapper,
  IndexMobileWrapper,
} from '../components/atoms/Wrapper'

const SLIDE_ITEMS = ['ddev', 'services', 'projects', 'me', 'contact']

const Index = () => {
  const size = useWindowSize()
  const isMobile = size.width < 768
  if (isMobile) {
    return (
      <Layout>
        <IndexMobileWrapper>
          <IndexHeroMobile />
          <IndexProjects />
        </IndexMobileWrapper>
      </Layout>
    )
  }
  return (
    <Layout>
      <IndexSlidesWrapper>
        <IndexSlidesAbsoluteWrapper>
          <SlidesProvider>
            <IndexSlides />
            <AsideNavigation items={SLIDE_ITEMS} />
          </SlidesProvider>
        </IndexSlidesAbsoluteWrapper>
      </IndexSlidesWrapper>
    </Layout>
  )
}

export default Index
