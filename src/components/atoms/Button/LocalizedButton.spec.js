import 'jest-styled-components'
import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render, cleanup } from '@testing-library/react'

import LocalizedButton from './LocalizedButton.js'

afterEach(cleanup)

test('<LocalizedButton> renders different versions on mobile and desktop', () => {
  const { getByText, queryByText, rerender } = render(
    <LocalizedButton isMobile={false} button="test" />
  )

  expect(getByText('test')).toBeDefined()
  expect(queryByText('›')).toBeNull()

  rerender(<LocalizedButton isMobile={true} button="test2" />)

  expect(getByText('test2')).toBeDefined()
  expect(queryByText('›')).not.toBeNull()
})
