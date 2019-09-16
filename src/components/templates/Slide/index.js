import React, { useContext } from 'react'
import Box from '../../atoms/Box'
import SlideHeading from '../../molecules/SlideHeading'
import LocalizedButton from '../../atoms/Button/LocalizedButton'
import DirectionalFade from '../../molecules/AnimatedBox/DirectionalFade'
import { LocaleContext } from '../../../context/ContentContext'
import useWindowSize from '../../../hooks/useWindowSize'

const Slide = ({ children, to, content: { title, description, button } }) => {
  const [locale] = useContext(LocaleContext)
  const { width } = useWindowSize()
  const isMobile = width < 768

  return (
    <Box
      display={locale === 'en' && to === 'blog' ? 'none' : 'block'}
      width={1}
      maxWidth={1400}
      m="auto"
      pt={[16, 16, 20, 24, 32]}
      pb={[16, 16, 20, 24, 32]}
      px={[6, 8, 12, 12, 16, 16]}
    >
      <DirectionalFade>
        <SlideHeading title={title} description={description} />
      </DirectionalFade>
      <DirectionalFade>{children}</DirectionalFade>
      <DirectionalFade>
        <LocalizedButton path={to} button={button} isMobile={isMobile} />
      </DirectionalFade>
    </Box>
  )
}

export default Slide
