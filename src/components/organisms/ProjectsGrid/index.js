import React, { useContext } from 'react'
import styled from 'styled-components'
import ProjectGridItem from '../../molecules/ProjectGridItem'
import { ProjectsContext } from '../../../context/ProjectsContext'

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

const gridTemplates = {
  0: 'primary',
  1: 'secondary-1',
  2: 'secondary-2',
  3: 'tertiary',
}

const ProjectsGrid = () => {
  const [projects, setProjects] = useContext(ProjectsContext)
  console.log({ projects })
  return (
    <Grid>
      {projects.map((project, idx) => (
        <ProjectGridItem
          project={project}
          area={gridTemplates[idx]}
         />
      ))}
    </Grid>
  )
}

export default ProjectsGrid
