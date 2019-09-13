import React from 'react'
import styled from 'styled-components'
import { space } from 'styled-system'

const Grid = styled.ul`
  ${space};

  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 100%;
  list-style: none;
  grid-gap: 2em;

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2.5em;
  }
`

const ProjectsGrid = ({ children }) => <Grid>{children}</Grid>

export default ProjectsGrid
