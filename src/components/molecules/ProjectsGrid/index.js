import React from 'react'
import styled from 'styled-components'
import { space } from 'styled-system'

const Grid = styled.ul`
  ${space};

  width: 100%;
  height: 100%;
  grid-template-columns: 100%;
  list-style: none;

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  display: grid;
`

const ProjectsGrid = ({ children }) => <Grid>{children}</Grid>

export default ProjectsGrid
