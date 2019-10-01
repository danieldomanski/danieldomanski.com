import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space } from 'styled-system'
import ProjectItem from '../../molecules/ProjectItem'

const Grid = styled.ul`
  ${space};

  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 100%;
  list-style: none;
  grid-gap: 2em;

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 4em;
  }
`

const ProjectsContainer = ({ projects }) => (
  <Grid>
    {projects.map(project => (
      <ProjectItem project={project} key={`${project.node.uid}`} />
    ))}
  </Grid>
)

ProjectsContainer.propTypes = {
  projects: PropTypes.oneOfType([PropTypes.array]),
}

ProjectsContainer.defaultProps = {
  projects: [],
}

export default ProjectsContainer
