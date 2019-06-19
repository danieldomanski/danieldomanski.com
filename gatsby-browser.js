/* eslint-disable import/prefer-default-export */
/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from 'react'
import ProjectsProvider from './src/context/ProjectsContext'

export const wrapPageElement = ({ element, props }) => {
  // wrap index and projects pages with ProjectsProvider
  // to allow these pages to set Context for Projects dependent components
  if (element.key !== '/' && element.key !== '/projects') return element

  return <ProjectsProvider>{element}</ProjectsProvider>
}
