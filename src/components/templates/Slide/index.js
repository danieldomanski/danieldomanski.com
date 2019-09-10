import React, { useContext } from 'react'
import { LocalizedLink } from '../../atoms/Link'
import Box from '../../atoms/Box'
import HomeInfoRow from '../../molecules/HomeInfoRow'
import ArrowButton from '../../atoms/Button/ArrowButton'
import DirectionalFade from '../../molecules/AnimatedBox/DirectionalFade'
import { LocaleContext } from '../../../context/ContentContext'

const LocalizedButton = ({ path, button }) => (
  <Box textAlign={['left', 'left', 'right']}>
    <LocalizedLink to={path} display={['block']}>
      <ArrowButton fontColor="cosmic.2" fontSize={['xs', 'sm', 'base']}>
        {button}
      </ArrowButton>
    </LocalizedLink>
  </Box>
)

const Slide = ({ children, path, content: { title, description, button } }) => {
  const [locale] = useContext(LocaleContext)

  return (
    <Box
      display={locale === 'en' && path === 'blog' ? 'none' : 'block'}
      width={1}
      maxWidth={1400}
      m="auto"
      pt={[12, 16, 48, 16]}
      pb={[12, 24, 24, 64]}
      px={[6, 8, 12, 12, 16, 16]}
    >
      <DirectionalFade>
        <HomeInfoRow title={title} description={description} />
      </DirectionalFade>
      <DirectionalFade>{children}</DirectionalFade>
      <DirectionalFade>
        <LocalizedButton path={path} button={button} />
      </DirectionalFade>
    </Box>
  )
}

export default Slide
