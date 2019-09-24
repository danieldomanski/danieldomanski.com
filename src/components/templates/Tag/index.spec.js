import 'jest-styled-components'
import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render, cleanup, queryAllByTestId } from '@testing-library/react'
import mockSchema from '../../../../__mocks__/schema'
import Tag from './index'

afterEach(cleanup)

test('Tag page renders with test mock data', () => {
  let { data, pageContext } = mockSchema.Tag()
  console.log({
    data: JSON.stringify(data),
    pageContext: JSON.stringify(pageContext),
  })
  const { getByText } = render(<Tag data={data} pageContext={pageContext} />)

  expect(getByText('JavaScript')).toBeDefined()
})
