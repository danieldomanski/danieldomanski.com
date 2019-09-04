import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Img from 'gatsby-image'
import Tilt from 'react-tilt'
import { LocalizedLink } from '../../atoms/Link'
import Box from '../../atoms/Box'
import Text from '../../atoms/Text'

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
  ${tw`relative w-full h-full shadow-lg overflow-hidden`};

  & img {
    transition: 0.2s ease !important;
  }

  &:hover {
    & > div {
      visibility: visible;
      height: 100%;

      & p {
        opacity: 1;
      }
    }
  }

  height: 280px;

  @media screen and (min-width: 420px) {
    height: 380px;
  }

  @media screen and (min-width: 1024px) {
    height: 460px;
  }
`

const BgCover = styled.div`
  ${tw`absolute w-full  flex flex-col justify-center items-center`}
  background: rgba(255, 255, 255, 1);
  z-index: 6;
  transition: all 0.2s ease 0.2s;
  height: 0;
  & p {
    opacity: 0;

    transition: opacity 0.1s ease 0.2s;
  }
`

const ProjectGridItem = ({ project, area }) => {
  const { uid } = project.node
  const { body, released } = project.node.data
  const slice = getSliceContent(body, 'image')
  const { localFile } = slice[0]

  return (
    <Box position="relative" width={1}>
      {released !== '0' ? (
        <Container area={area} options={{ max: 20, scale: 1.02 }}>
          <LocalizedLink to={`/projects/${uid}`}>
            <Img fluid={localFile.childImageSharp.fluid} />
          </LocalizedLink>
        </Container>
      ) : (
        <HoverScale>
          <BgCover>
            <Text fontWeight="bold" fontColor="primary.9" fontSize="3xl">
              Case coming soon.
            </Text>
            <Text fontSize="3xl" mt={4}>
              🤯
            </Text>
          </BgCover>
          <Img fluid={localFile.childImageSharp.fluid} />
        </HoverScale>
      )}
    </Box>
  )
}
/*           <BgCover>

          </BgCover> */

export default ProjectGridItem
