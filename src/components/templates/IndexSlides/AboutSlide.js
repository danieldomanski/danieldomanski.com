import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Text from '../../atoms/Text'
import Icon from '../../atoms/Icon'
import Button from '../../atoms/Button'

const Container = styled.section`
  ${tw`flex flex-col items-center pb-32`}
`

const AboutSlide = () => (
  <Container>
    <Text
      fontSize={['2xl', '4xl', '5xl']}
      fontColor="primary.7"
      fontWeight="black"
      my={8}
    >
      Get to know me better.
    </Text>
    <Link to="/about">
      <Button variant="primary" size="lg">
        About me <Icon icon="arrow" width="24" fill="#444" mx={1} />
      </Button>
    </Link>
  </Container>
)

export default AboutSlide
