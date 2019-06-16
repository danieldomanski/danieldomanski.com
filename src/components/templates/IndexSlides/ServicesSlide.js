import React, { useState } from 'react'
import styled from 'styled-components'
import SubSlide from '../../organisms/SubSlide'

const SlidesContainer = styled.section`
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
    <>
      <SlidesContainer>
        {slides.map((slide, idx) => {
          const { title, description } = slide
          const config = { title, description, idx }

          return <SubSlide active={activeService === idx} config={config} />
        })}
      </SlidesContainer>
    </>
  )
}

export default ServicesSlide
