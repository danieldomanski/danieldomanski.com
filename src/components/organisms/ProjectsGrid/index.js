import React from 'react'
import styled from 'styled-components'
import ProjectGridItem from '../../molecules/ProjectGridItem'

const Grid = styled.ul`
  ${tw`my-8 w-full`} display: grid;
  grid-auto-columns: auto;
  grid-auto-rows: 240px;
  grid-gap: 2em;
  max-width: 1400px;

  min-height: 400px;
  list-style: none;
  margin: 0;
  padding: 0;

  @media screen and (min-width: 768px) {
    width: calc(100% - 2em);
    grid-template-columns: 30% 50% 20%;
    grid-template-rows: 50% 50%;
    grid-template-areas:
      'primary secondary-1 tertiary'
      'primary secondary-2 tertiary';
  }
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
