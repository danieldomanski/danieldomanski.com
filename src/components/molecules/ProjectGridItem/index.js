import React, { useRef, useEffect, useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Img from 'gatsby-image'
import Heading from '../../atoms/Heading'

const Container = styled.li`
  ${tw`relative h-full shadow-lg overflow-hidden`};

  grid-row-end: span ${props => props.spans};
`

const ProjectDescription = styled.p`
  ${tw`absolute z-20 bg-primary-800 block w-full pin-b text-xl font-bold text-primary-100 pl-4 m-0`}
  bottom: -64px;
`

const Title = styled.h1`
  ${tw`font-sans font-black text-6xl text-white absolute pin-y`}
`

const ProjectGridItem = ({ project, area }) => {
  const [spans, setSpans] = useState(0)
  const { body, description, title, color } = project.node.data
  const { uid } = project.node
  const { localFile, dimensions } = body[0].primary.image

  const calculateSpans = aspectRatio => {
    const baseSpan = 6 // 6 spans are base === 6 * 60 px = 360px as base
    const baseRatio = 1.25 // 4:3

    // each 0.1 difference in aspect ratio increases span by 1
    const spanAddition = Math.floor(
      Math.abs(Math.round((baseRatio - aspectRatio) * 100) / 100) / 0.1
    )

    return baseSpan + spanAddition
  }

  useEffect(() => {
    setSpans(calculateSpans(localFile.childImageSharp.fluid.aspectRatio))
  })

  return (
    <Container area={area} spans={spans}>
      <Link to={`/en/${uid}`}>
        <Img fluid={localFile.childImageSharp.fluid} />
      </Link>
    </Container>
  )
}

export default ProjectGridItem
