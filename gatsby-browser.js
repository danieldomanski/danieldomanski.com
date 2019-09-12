/* eslint-disable import/prefer-default-export */
/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from 'react'
import ContentProvider from './src/context/ContentContext'

export const wrapPageElement = ({ element }) => (
  <ContentProvider>{element}</ContentProvider>
)
