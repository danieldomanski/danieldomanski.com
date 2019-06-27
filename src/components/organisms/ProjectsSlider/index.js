import React, { useContext } from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import SliderActions from '../../molecules/SliderActions'
import Image from '../../atoms/ProjectCoverImage'
import { ProjectsContext } from '../../../context/ProjectsContext'

const Container = styled.div`
  ${tw`w-full mt-12 mb-24`}
  min-height: 400px;
`

const Slides = styled.ul`
  ${tw`w-full h-full flex items-center relative flex-wrap`}
  list-style: none;
`

const Slide = styled.li`
  ${tw`relative h-full bg-primary-300 shadow-lg overflow-hidden mr-4 md:mr-8 xl:mr-12 md:my-0`};
  max-height: 450px;

  @media screen and (max-width: 768px) {
    max-height: 250px;
  }

  &:first-child {
    flex-basis: calc(33.333% - 2rem);

    @media screen and (min-width: 768px) and (max-width: 1200px) {
      max-height: 225px;
      max-width: unset;
      margin-right: 0;
      flex-basis: 100%;
      margin-bottom: 1em;
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

const ProjectsSlider = () => {
  const [projects, , active, setActive] = useContext(ProjectsContext)

  return (
    <Container>
      <Slides>
        {projects.map((item, idx) => (
          <Slide>
            <Image input={item.node.data.body[0]} />
          </Slide>
        ))}
      </Slides>
    </Container>
  )
}

export default ProjectsSlider
