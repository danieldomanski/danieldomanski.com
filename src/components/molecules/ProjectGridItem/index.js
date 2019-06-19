import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Image from '../../atoms/ProjectCoverImage'

const Container = styled.li`
  ${tw`relative bg-primary-300 shadow-lg overflow-hidden mr-4 md:mr-8 my-4`};
  max-height: 450px;

  @media screen and (max-width: 768px) {
    max-height: 250px;
  }

  &:first-child {
    flex-basis: calc(33.333% - 2rem);

    @media screen and (min-width: 768px) and (max-width: 1200px) {
      flex-basis: calc(100% - 1rem);
      max-height: 225px;
      max-width: unset;
      margin-right: 0;
    }
  }

  &:nth-child(n + 2) {
    flex-basis: calc(33.333% - 2rem);

    @media screen and (min-width: 768px) and (max-width: 1200px) {
      flex-basis: calc(50% - 1rem);
      max-height: 250px;
      max-width: unset;
    }
  }

  &:last-child {
    margin-right: 0;
  }
`

const ProjectDescription = styled.p`
  ${tw`absolute z-10 pin-b text-primary-100`}
`

const ProjectGridItem = ({ project, area }) => {
  const { body, description, title } = project.node.data
  const { uid } = project.node

  return (
    <Container area={area}>
      <Link to={`/en/${uid}`}>
        <Image input={body[0]} />
        <ProjectDescription>{title.text}</ProjectDescription>
      </Link>
    </Container>
  )
}

export default ProjectGridItem
