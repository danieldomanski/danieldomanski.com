import React, { useContext } from 'react'
import styled from 'styled-components'
import { space } from 'styled-system'
import Text from '../../atoms/Text'
import ProjectGridItem from '../../molecules/ProjectGridItem'

const Grid = styled.ul`
  ${space};

  ${tw`w-full h-full`};
  grid-template-columns: 100%;
  grid-gap: 0.5em;
  list-style: none;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);

    grid-gap: 2em;
  }

  display: grid;
`

const ProjectsGrid = ({ projects, mt, mb }) => (
  <Grid mt={mt} mb={mb}>
    {projects.map(project => {
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
          <ProjectGridItem project={project} />
        </>
      )
    })}
  </Grid>
)

export default ProjectsGrid
