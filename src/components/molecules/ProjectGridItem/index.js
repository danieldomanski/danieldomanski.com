import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Img from 'gatsby-image'
import Tilt from 'react-tilt'
import { LocalizedLink } from '../../atoms/Link'
import Box from '../../atoms/Box'
import { getSliceContent } from '../../../utilitity/prismic'

const Container = styled(Tilt)`
  ${tw`relative w-full h-full shadow-lg overflow-hidden`};
  height: 280px;

  @media screen and (min-width: 420px) {
    height: 380px;
  }

  @media screen and (min-width: 1024px) {
    height: 460px;
  }

  transition: height 0.25s ease-in-out;
`

const HoverScale = styled.div`
  width: 100%;
  height: 100%;
  transition: transform 0.2s ease-in-out;
`

const BgCover = styled.div`
  ${tw`flex items-center justify-center text-center absolute w-full h-full`};
  background: transparent;
  z-index: 5;
  transition: transform 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);

  &:hover {
    & > div {
      visibility: visible;
      opacity: 1;
    }
  }
`

const ProjectGridItem = ({ project, area }) => {
  const { uid } = project.node
  const { body, title } = project.node.data
  const slice = getSliceContent(body, 'image')
  const { localFile } = slice[0]

  return (
    <Box position="relative">
      <Container area={area} options={{ max: 20, scale: 1.02 }}>
        <LocalizedLink to={`/projects/${uid}`}>
          <BgCover />
          <HoverScale>
            <Img fluid={localFile.childImageSharp.fluid} />
          </HoverScale>
        </LocalizedLink>
      </Container>
    </Box>
  )
}

export default ProjectGridItem
