import React, { useState, useEffect, useRef, useContext } from 'react'

import Layout from '../components/templates/Layout'
import useThrottledScroll from '../hooks/useThrottledScroll'
import AsideNavigation from '../components/organisms/AsideNavigation'
import IndexSlides from '../components/templates/IndexSlides'
import SlidesProvider, { SlidesContext } from '../context/SlidesContext'

import {
  IndexSlidesWrapper,
  IndexSlidesAbsoluteWrapper,
} from '../components/atoms/Wrapper'

const SLIDE_ITEMS = ['ddev', 'services', 'projects', 'me', 'contact']

const Index = () => (
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

export default Index
