import 'jest-styled-components'
import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render, cleanup } from '@testing-library/react'

import LocalizedButton from './LocalizedButton'

afterEach(cleanup)

test('<LocalizedButton> renders different versions on mobile and desktop', () => {
  const { getByText, rerender } = render(
    <LocalizedButton isMobile={false} button="test" />
  )

  expect(getByText('test')).toBeDefined()

  rerender(<LocalizedButton isMobile button="test2" />)

  expect(getByText('test2')).toBeDefined()
})
