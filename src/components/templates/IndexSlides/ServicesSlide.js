import React, { useState, createContext } from 'react'
import styled from 'styled-components'
import TextSlider from '../../molecules/TextSlider'
import SubSlide from '../../organisms/SubSlide'
import { CenteredAbsoluteWrapper } from '../../atoms/Wrapper'

const Container = styled.div`
  position: relative;
  left: 0vw;
  top: 100vh;
  width: 100%;
  height: 100%;
`

const SlidesWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  height: 100%;
`

const Slides = styled.section`
  width: 100%;
  height: 100%;
  margin: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const slides = [
  {
    title: 'Any website you need',
    description:
      'We can and like to create beautiful and at the same time convenient interfaces. Due to it, our agency repeatedly became a winner of various international awards',
  },
  {
    title: 'Development of mobile apps',
    description:
      "We create mobile apps of any complexity. Apps for cafes or restaurants, selling goods or services, control of clerks of a company, or just counting fats and carbohydrates that you've got today with food.",
  },
  {
    title: 'Website designed for your needs',
    description:
      'We develop a strategy and choose keywords. We develop a content plan for the requirements of search engines, increasing qualities of a website. After reaching the Top in search engines, we can keep the result further.',
  },
]

const ServicesSlide = ({ active }) => {
  const [activeService, set] = useState(0)

  return (
    <Container>
      <CenteredAbsoluteWrapper active={active}>
        <Slides>
          {slides.map((slide, idx) => {
            const { title, description } = slide
            const config = { title, description, idx }

            return <SubSlide active={activeService === idx} config={config} />
          })}
        </Slides>
        <TextSlider active={activeService} set={set} />
      </CenteredAbsoluteWrapper>
    </Container>
  )
}

export default ServicesSlide
