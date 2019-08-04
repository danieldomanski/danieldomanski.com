import React, { useContext } from 'react'
import styled from 'styled-components'
import Text from '../../atoms/Text'
import ProjectGridItem from '../../molecules/ProjectGridItem'
import { ProjectsContext } from '../../../context/ProjectsContext'

const Grid = styled.ul`
  ${tw`w-full h-full py-4 md:py-16`};
  grid-template-columns: 100%;
  grid-gap: 0.5em;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 500px;
    grid-gap: 2em;
  }

  display: grid;
`

const gridTemplates = {
  0: 'primary',
  1: 'secondary-1',
  2: 'secondary-2',
  3: 'tertiary',
}

const ProjectsGrid = ({ projects }) => (
  <Grid>
    {projects.map((project, idx) => {
      const { title } = project.node.data
      return (
        <>
          <Text
            display={['inline-block', 'inline-block', 'none']}
            fontFamily="sans"
            fontColor="primary.8"
            fontSize={['xl', '3xl']}
            fontWeight="bold"
            mt={8}
          >
            {title.text}
          </Text>
          <ProjectGridItem project={project} area={gridTemplates[idx]} />
        </>
      )
    })}
  </Grid>
)

export default ProjectsGrid
