import React from 'react'
import styled from 'styled-components'
import { space } from 'styled-system'
import Text from '../../atoms/Text'
import ProjectGridItem from '../../molecules/ProjectGridItem'
import { DirectionalFade } from '../../molecules/AnimatedBox'

const Grid = styled.ul`
  ${space};

  ${tw`w-full h-full`};
  grid-template-columns: 100%;
  grid-gap: 0.5em;
  list-style: none;

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);

    grid-gap: 3em;
  }

  display: grid;
`

const config = { mass: 5, tension: 2000, friction: 200 }

const ProjectsGrid = ({ projects, mt, mb }) => {
  const [visible, set] = React.useState(false)

  return (
    <Grid mt={mt} mb={mb}>
      {projects.map((project, idx) => {
        const { title } = project.node.data

        return (
          <DirectionalFade delay={0.1 * idx}>
            <Text
              display={['inline-block', 'inline-block', 'none']}
              fontFamily="sans"
              fontColor="primary.8"
              fontSize={['xl', '3xl']}
              fontWeight="bold"
              mt={idx === 0 ? 0 : 8}
            >
              {title.text}
            </Text>
            <ProjectGridItem project={project} />
          </DirectionalFade>
        )
      })}
    </Grid>
  )
}

export default ProjectsGrid
