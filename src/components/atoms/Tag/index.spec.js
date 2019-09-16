import 'jest-styled-components'
import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render, cleanup } from '@testing-library/react'

import Tag from './index'

afterEach(cleanup)

const mockData = {
  data: { name: 'test', slug: 'js' },
}

test('<Tag> renders with different styled-system category props', () => {
  const { container } = render(<Tag {...mockData}>Test</Tag>)

  expect(container.firstChild).toMatchSnapshot()
})
