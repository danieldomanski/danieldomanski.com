import React, { useContext } from 'react'
import styled from 'styled-components'
import ProjectGridItem from '../../molecules/ProjectGridItem'
import Subheading from '../../atoms/Subheading'
import { ProjectsContext } from '../../../context/ProjectsContext'

const Grid = styled.ul`
  ${tw`w-full h-full my-8 md:my-24`};
  grid-template-columns: 100%;
  grid-gap: 0.5em;

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 50px;
    grid-gap: 1em;
  }

  display: grid;
`

const ProjectTitle = styled.div`
  ${tw`lg:hidden mb-12 pl-2`}
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
      {projects.map((project, idx) => {
        const { title } = project.node.data
        return (
          <>
            <ProjectGridItem project={project} area={gridTemplates[idx]} />
            <ProjectTitle>
              <Subheading fontColor="primary-800" size="xl" weight="bold">
                {title.text}
              </Subheading>
            </ProjectTitle>
          </>
        )
      })}
    </Grid>
  )
}

export default ProjectsGrid
