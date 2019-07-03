import React, { useContext } from 'react'
import styled from 'styled-components'
import ProjectGridItem from '../../molecules/ProjectGridItem'
import { ProjectsContext } from '../../../context/ProjectsContext'

const Grid = styled.ul`
  ${tw`w-full h-full my-24`};
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 50px;
  grid-gap: 3em;
  justify-content: center;
  align-items: center;
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
