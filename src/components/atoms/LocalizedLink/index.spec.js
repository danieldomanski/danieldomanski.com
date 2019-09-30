import 'jest-styled-components'
import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render, cleanup } from '@testing-library/react'

import LocalizedLink from './index'

afterEach(cleanup)

test('<Image> renders', () => {
  const mockData = {
    to: 'test',
    partiallyActive: true,
    display: 'inline-block',
  }

  const { container } = render(
    <LocalizedLink {...mockData}>test</LocalizedLink>
  )

  expect(container.firstChild).toMatchSnapshot()
})
