import 'jest-styled-components'
import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render, cleanup } from '@testing-library/react'

import Icon from './index'

afterEach(cleanup)

test('<Icon> renders with given props', () => {
  let props = {
    width: 24,
    height: 24,
    icon: 'react',
  }

  const { container } = render(<Icon {...props} />)

  expect(container.firstChild).toMatchSnapshot()
  expect(container.firstChild).toHaveStyleRule('width', '24px')
  expect(container.firstChild).toHaveStyleRule('height', '24px')
})
