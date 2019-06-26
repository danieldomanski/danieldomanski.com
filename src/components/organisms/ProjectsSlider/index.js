import React, { useContext } from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import SliderActions from '../../molecules/SliderActions'
import Image from '../../atoms/ProjectCoverImage'
import { ProjectsContext } from '../../../context/ProjectsContext'

const Container = styled.div`
  ${tw``}
`

const Slides = styled.ul`
  ${tw`w-full absolute flex items-center`}
  list-style: none;
`

const Slide = styled.li`
  ${tw`bg-primary-300 mx-4`}
  width: 30%;
  height: 400px;
`

const CurrentSlide = styled(Slide)`
  width: 40%;
  height: 450px;
`

const ProjectsSlider = () => {
  const [projects, , active, setActive] = useContext(ProjectsContext)

  return (
    <Container>
      <Slides>
        {projects.map((item, idx) =>
          idx === active ? (
            <CurrentSlide>
              <Image input={item.node.data.body[0]} />
              {item.node.uid}
            </CurrentSlide>
          ) : (
            <Slide>
              <Image input={item.node.data.body[0]} />
              {item.node.uid}
            </Slide>
          )
        )}
        <SliderActions
          active={active}
          projectsLength={projects.length}
          set={setActive}
        />
      </Slides>
    </Container>
  )
}

export default ProjectsSlider
