import React, { useContext } from 'react'
import { LocalizedLink } from '../../atoms/Link'
import Box from '../../atoms/Box'
import Text from '../../atoms/Text'
import HomeInfoRow from '../../molecules/HomeInfoRow'
import ArrowButton from '../../atoms/Button/ArrowButton'
import DirectionalFade from '../../molecules/AnimatedBox/DirectionalFade'
import { LocaleContext } from '../../../context/ContentContext'
import useWindowSize from '../../../hooks/useWindowSize'

const LocalizedButton = ({ path, button, isMobile }) => (
  <Box textAlign={['left', 'left', 'right']}>
    <LocalizedLink to={path} display={['block']}>
      {isMobile ? (
        <Text
          fontWeight="bold"
          fontColor="accent.8"
          fontSize={['base', 'base', 'base']}
          style={{ textTransform: 'uppercase' }}
        >
          {button}
          <Text ml={2} fontSize="xl" fontColor="accent.8" fontWeight="black">
            ›
          </Text>
        </Text>
      ) : (
        <ArrowButton
          display={['none', 'none', 'block']}
          fontColor="cosmic.2"
          fontSize={['xs', 'sm', 'base']}
        >
          {button}
        </ArrowButton>
      )}
    </LocalizedLink>
  </Box>
)

const Slide = ({ children, path, content: { title, description, button } }) => {
  const [locale] = useContext(LocaleContext)
  const { width } = useWindowSize()
  const isMobile = width < 768

  return (
    <Box
      display={locale === 'en' && path === 'blog' ? 'none' : 'block'}
      width={1}
      maxWidth={1400}
      m="auto"
      pt={[12, 16, 20, 24, 32]}
      pb={[12, 16, 20, 24, 32]}
      px={[6, 8, 12, 12, 16, 16]}
    >
      <DirectionalFade>
        <HomeInfoRow title={title} description={description} />
      </DirectionalFade>
      <DirectionalFade>{children}</DirectionalFade>
      <DirectionalFade>
        <LocalizedButton path={path} button={button} isMobile={isMobile} />
      </DirectionalFade>
    </Box>
  )
}

export default Slide
