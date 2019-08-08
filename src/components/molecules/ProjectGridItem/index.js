import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Img from 'gatsby-image'
import { LocalizedLink } from '../../atoms/Link'
import Text from '../../atoms/Text'
import { getSliceContent } from '../../../utilitity/prismic'

const Container = styled.li`
  ${tw`relative w-full h-full shadow-lg overflow-hidden`};
  height: 300px;

  @media screen and (min-width: 420px) {
    height: 380px;
  }

  @media screen and (min-width: 1024px) {
    height: 500px;
  }

  transition: height 0.25s ease-in-out;
`

const BgCover = styled.div`
  ${tw`flex items-center justify-center text-center absolute w-full h-full`};
  background: transparent;
  z-index: 5;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    & + div {
      transform: scale(1.1);
    }

    & > div {
      visibility: visible;
      opacity: 1;
      transform: translateY(0);
    }

    background-color: rgba(245, 245, 245, 0.95);
  }
`

const CoverActions = styled.div`
  ${tw`invisible opacity-0 absolute flex flex-col justify-center w-full h-fulltext-center px-8`};
  transition: 0.2s ease-in-out;
  transition-delay: 0.1s;
  transform: translateY(50px);
`

const HoverScale = styled.div`
  width: 100%;
  height: 100%;
  transition: transform 0.2s ease-in-out;
`

const SlideUp = styled.div`
  transition: transform 0.2s ease-in-out;
`
const formatInvolvment = roles =>
  roles.map(role => role.involvment.document[0].data.involvment.text)

const ProjectGridItem = ({ project, area }) => {
  const { uid } = project.node
  const { body, title } = project.node.data
  const roles = formatInvolvment(project.node.data.role)
  const slice = getSliceContent(body, 'image')
  const { localFile } = slice[0]

  return (
    <Container area={area}>
      <LocalizedLink to={`/projects/${uid}`}>
        <BgCover>
          <CoverActions>
            <Text
              fontSize={['3xl']}
              fontColor="primary.8"
              fontWeight="black"
              style={{ letterSpacing: '-1px' }}
            >
              {title.text}
            </Text>
            <SlideUp>
              <Text
                maxWidth={400}
                fontSize={['sm', 'base']}
                fontColor="primary.6"
              >
                {roles.join(' / ')}
              </Text>
            </SlideUp>
          </CoverActions>
        </BgCover>
        <HoverScale>
          <Img fluid={localFile.childImageSharp.fluid} />
        </HoverScale>
      </LocalizedLink>
    </Container>
  )
}

export default ProjectGridItem
