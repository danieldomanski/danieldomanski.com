import React, { useContext } from 'react'
import styled from 'styled-components'
import ProjectGridItem from '../../molecules/ProjectGridItem'
import { ProjectsContext } from '../../../context/ProjectsContext'

const Grid = styled.ul`
  ${tw`flex  md:flex-row md:flex-wrap`};
  width: calc(100% - 1em);
  flex: 1;
  max-width: 1400px;
  max-height: 50%;
  list-style: none;
  margin: 0;
  padding: 0;

  @media screen and (max-width: 768px) {
    max-height: unset;
    width: 100%;
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

  return (
    <Grid>
      {projects.map((project, idx) => (
        <ProjectGridItem project={project} area={gridTemplates[idx]} />
      ))}
    </Grid>
  )
}

export default ProjectsGrid
