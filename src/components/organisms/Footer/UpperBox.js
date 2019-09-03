import React, { useContext } from 'react'
import styled from 'styled-components'
import Box from '../../atoms/Box'
import Text from '../../atoms/Text'
import HomeParticles from '../../molecules/HomeParticles'
import { ContentContext } from '../../../context/ContentContext'
import RichText from '../../atoms/RichText'

const Line = styled.span`
  ${tw`m-auto my-10`}
  display: block;

  width: 80px;
  height: 4px;
  background-color: #a0a6b2;
  opacity: 0.8;
`

const UpperRect = () => {
  const [content] = useContext(ContentContext)
  console.log({ content })
  const { title, subtitle, description } = content.home.footer

  return (
    <>
      <Box
        height="100%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        mx={[6, 8, 12]}
        py={[16, 16, 32]}
        borderTop="1px solid rgba(0,0,0,0.1)"
      >
        <HomeParticles variant="footer" />
        <RichText content={title} />
        <RichText content={subtitle} />
        <Line />
        <RichText content={description} />
      </Box>
    </>
  )
}

export default UpperRect
