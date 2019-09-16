import 'jest-styled-components'
import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render, cleanup } from '@testing-library/react'

import Text from './index'

afterEach(cleanup)

test('<Text> renders with different styled-system category props', () => {
  const { container } = render(
    <Text fontWeight="bold" fontColor={['red', 'blue']} fontSize={['lg', 'xl']}>
      Test.
    </Text>
  )

  expect(container.firstChild).toMatchSnapshot()
})
