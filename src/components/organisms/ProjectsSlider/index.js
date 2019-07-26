import React, { useContext } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Image from '../../atoms/ProjectCoverImage'
import { ProjectsContext } from '../../../context/ProjectsContext'
import { getSliceContent } from '../../../utilitity/prismic'

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
      height: 500px;
    }
  }

  list-style: none;
`

const Slide = styled(Link)`
  ${tw`relative h-full bg-primary-300 shadow-lg  overflow-hidden`};

  &:first-of-type {
    grid-area: a;

    @media screen and (min-width: 1200px) {
      grid-area: unset;
    }
  }

  @media screen and (max-width: 768px) {
    max-height: 300px;
  }

  &:focus {
    box-shadow: 0px 0px 0px 3px rgba(0, 0, 0, 0.15);
  }

  &:hover {
    transform: scale(1.03);

    & article {
      transform: translateY(0);
    }
  }

  transition: 0.5s ease-in-out;
`

const BgCover = styled.div`
  ${tw`absolute w-full h-full z-10`};

  background: linear-gradient(
    0deg,
    rgba(240, 240, 240, 0.25) 0%,
    rgba(240, 240, 240, 0) 100%
  );
`

const Cover = styled.article`
  ${tw`w-full absolute pin-b z-10`}
  transform: translateY(320px);
  height: 50%;
  transition: 0.5s ease-in-out;
`

const CoverActions = styled.span`
  ${tw`relative flex flex-col justify-center w-full h-full pin-b z-10 text-center px-8 shadow-lg`};
  background-color: rgba(240, 240, 240, 0.95);
  transition: 0.5s ease-in-out;
`

const Title = styled.h1`
  ${tw`text-3xl xl:text-4xl font-black text-primary-800 my-1`}
`

const Description = styled.p`
  ${tw`font-sans italic text-primary-600 my-2`}
`

const ProjectsSlider = () => {
  const [projects, , active, setActive] = useContext(ProjectsContext)

  return (
    <>
      <Slides>
        {projects.map((item, idx) => {
          const { title, description, body } = item.node.data
          const { uid } = item.node
          const input = getSliceContent(body, 'image')

          return (
            <Slide to={`/en/projects/${uid}`}>
              <BgCover />
              <Cover>
                <CoverActions>
                  <Title>{title.text}</Title>
                  <Description>{description.text}</Description>
                </CoverActions>
              </Cover>
              <Image input={input[0].localFile} />
            </Slide>
          )
        })}
      </Slides>
    </>
  )
}

export default ProjectsSlider
