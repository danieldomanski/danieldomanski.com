import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Heading from '../../atoms/Heading'
import Icon from '../../atoms/Icon'
import Button from '../../atoms/Button'

const Container = styled.section`
  ${tw`flex flex-col items-center pb-32`}
`

const AboutSlide = () => (
  <Container>
    <Heading
      fontSize={['2xl', '4xl', '5xl']}
      fontColor="primary-700"
      fontWeight="black"
      my={12}
    >
      Get to know me better.
    </Heading>
    <Link to="/about">
      <Button variant="primary" size="lg">
        About me <Icon icon="arrow" width="24" fill="#444" />
      </Button>
    </Link>
  </Container>
)

export default AboutSlide
