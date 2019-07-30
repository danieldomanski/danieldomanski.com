import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import ContentWrapper from '../../atoms/Wrapper/ContentWrapper'
import FooterSocials from '../../molecules/FooterSocialIcons'
import Text from '../../atoms/Text'
import { Link } from '../../atoms/Link'

const BottomWrapper = styled.div`
  ${tw` w-full py-8 md:py-4`}
  background-color: #151515;
`

const BottomRow = styled(ContentWrapper)`
  ${tw`h-full flex flex-col md:flex-row items-center justify-between px-12 xl:px-32`}

  & > * {
    margin: 0.25em 0;
  }
`

const BottomBox = () => (
  <BottomWrapper>
    <BottomRow>
      <Link
        display={['none', 'none', 'block']}
        fontColor="primary.3"
        fontSize={['sm', 'base']}
        to="https://github.com/av3ng3roo"
      >
        View source code
      </Link>
      <Text
        fontFamily="sans"
        fontSize={['base']}
        fontColor="primary.3"
        fontWeight="bold"
      >
        hello@ddomanski.dev
      </Text>
      <FooterSocials />
    </BottomRow>
  </BottomWrapper>
)

export default BottomBox
