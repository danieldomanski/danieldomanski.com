import 'jest-styled-components'
import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render, cleanup } from '@testing-library/react'

import Avatar from './index'

afterEach(cleanup)

test('<Avatar> renders with different styled-system category props', () => {
  const props = {
    x: 20,
    y: 20,
    src: 'test.jpg',
  }

  const { container } = render(<Avatar {...props} />)

  expect(container.firstChild).toMatchSnapshot()
})
