import 'jest-styled-components'
import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render, cleanup } from '@testing-library/react'
import mockSchema from '../../../../__mocks__/schema'
import ProjectsContainer from './index'

afterEach(cleanup)

test('<ProjectsContainer> render different output based on given projects', () => {
  let projects = mockSchema.Projects(1)
  const { queryAllByTestId, rerender } = render(
    <ProjectsContainer projects={projects} />
  )

  expect(queryAllByTestId('project-item')).toHaveLength(1)

  projects = mockSchema.Projects(0)
  rerender(<ProjectsContainer projects={projects} />)
  expect(queryAllByTestId('project-item')).toHaveLength(0)
})
