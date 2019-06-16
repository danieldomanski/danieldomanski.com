import React from 'react'
import styled from 'styled-components'
import ProjectGridItem from '../../molecules/ProjectGridItem'

const Grid = styled.ul`
  display: grid;
  grid-template-columns: 35% 50% 20%;
  grid-template-rows: 50% 50%;
  grid-template-areas:
    'primary secondary-1 tertiary'
    'primary secondary-2 tertiary';
  grid-gap: 1em;
  max-width: 1200px;
  width: calc(100% - 300px);
  min-height: 400px;
  list-style: none;
  margin: 0;
  padding: 0;
`

const ProjectsGrid = ({ items }) => (
  <Grid>
    <ProjectGridItem area="primary" />
    <ProjectGridItem area="secondary-1" />
    <ProjectGridItem area="secondary-2" />
    <ProjectGridItem area="tertiary" />
  </Grid>
)

export default ProjectsGrid
