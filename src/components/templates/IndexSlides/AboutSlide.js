import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Heading from '../../atoms/Heading'
import Subheading from '../../atoms/Subheading'
import Icon from '../../atoms/Icon'
import { ThemeBtn } from '../../atoms/Button'

const Container = styled.section`
  ${tw`flex flex-col items-center pb-32`}
`

const AboutSlide = () => (
  <Container>
    <Heading
      fontColor="primary-800"
      weight="black"
      size={['2xl', '4xl', '5xl']}
      my={12}
    >
      Get to know me better.
    </Heading>
    <Link to="/about">
      <ThemeBtn>
        <Subheading
          size={['sm', 'base', 'lg']}
          fontColor="primary-800"
          weight="bold"
        >
          About me <Icon icon="arrow" width="24" />
        </Subheading>
      </ThemeBtn>
    </Link>
  </Container>
)

export default AboutSlide
