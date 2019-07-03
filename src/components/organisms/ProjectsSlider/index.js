import React, { useContext } from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import SliderActions from '../../molecules/SliderActions'
import Image from '../../atoms/ProjectCoverImage'
import { ProjectsContext } from '../../../context/ProjectsContext'
import Paragraph from '../../atoms/Paragraph'

const Slides = styled.ul`
  ${tw`w-full h-full my-16`}
    display: grid;
    grid-template-areas: "a a" "b b";
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2em;
    
    @media screen and (min-width: 1200px){
      grid-template-rows: 100%;
      grid-template-columns: repeat(3, 1fr);

    }
  }

  list-style: none;
`

const Slide = styled.a`
  ${tw`relative h-full bg-primary-300 shadow-lg `};

  &:first-of-type {
    grid-area: a;

    @media screen and (min-width: 1200px) {
      grid-area: unset;
    }
  }

  transition: 0.5s ease-in-out;

  @media screen and (max-width: 768px) {
    max-height: 300px;
  }

  &:focus {
    box-shadow: 0px 0px 0px 3px rgba(0, 0, 0, 0.15);
  }

  &:hover {
    transform: translateY(4px) scale(1.02);
  }
`

const BgCover = styled.div`
  ${tw`absolute w-full h-full z-10`};

  background: linear-gradient(
    0deg,
    rgba(240, 240, 240, 0.5) 0%,
    rgba(240, 240, 240, 0) 100%
  );
`

const CoverActions = styled.span`
  ${tw`flex flex-col w-full absolute z-10 text-center px-8 bg-primary-100`};
  height: 33%;
  bottom: 0;
`

const Title = styled.h1`
  ${tw`relative text-xl xl:text-4xl font-black text-primary-900`}
`

const ProjectsSlider = () => {
  const [projects, , active, setActive] = useContext(ProjectsContext)

  return (
    <>
      <Slides>
        {projects.map((item, idx) => {
          const { title, description } = item.node.data

          return (
            <Slide href="#">
              <BgCover />
              <CoverActions>
                <Title>{title.text}</Title>
                <Paragraph fontColor="primary-300" size="base" italic>
                  {description.text}
                </Paragraph>
              </CoverActions>
              <Image input={item.node.data.body[0]} />
            </Slide>
          )
        })}
      </Slides>
    </>
  )
}

export default ProjectsSlider
