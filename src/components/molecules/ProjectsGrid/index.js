import React from 'react'
import styled from 'styled-components'
import { space } from 'styled-system'

const Grid = styled.ul`
  ${space};

  width: 100%;
  height: 100%;
  grid-template-columns: 100%;
  grid-gap: 1em;
  list-style: none;

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);

    grid-gap: 4em;
  }

  display: grid;
`

const ProjectsGrid = ({ children, mt, mb }) => (
  <Grid mt={mt} mb={mb}>
    {children}
  </Grid>
)

export default ProjectsGrid
