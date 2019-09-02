import React, { useContext } from 'react'
import { LocalizedLink } from '../../atoms/Link'
import Box from '../../atoms/Box'
import HomeInfoRow from '../../molecules/HomeInfoRow'
import ArrowButton from '../../atoms/Button/ArrowButton'
import { LocaleContext } from '../../../context/ContentContext'

const Slide = ({
  children,
  path,
  buttonText,
  content: { title, description },
}) => {
  const [locale] = useContext(LocaleContext)

  return (
    <Box
      display={locale === 'en' && path === 'blog' ? 'none' : 'block'}
      width={1}
      maxWidth={1400}
      m="auto"
      pt={[12, 16, 48, 16]}
      pb={[24, 24, 24, 64]}
      px={[8, 8, 12, 12, 16, 16]}
    >
      <HomeInfoRow title={title} description={description} />
      {children}
      <Box textAlign={['center', 'left', 'right']} mt={[12, 16, 24]}>
        <LocalizedLink to={path} display={['block']}>
          <ArrowButton fontColor="cosmic.2" fontSize={['sm', 'base', 'base']}>
            {buttonText}
          </ArrowButton>
        </LocalizedLink>
      </Box>
    </Box>
  )
}

export default Slide
