import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import ContentWrapper from '../../atoms/Wrapper/ContentWrapper'
import FooterSocials from '../../molecules/FooterSocialIcons'
import Text from '../../atoms/Text'
import { CollapsableLink } from '../../atoms/Link'

const BottomWrapper = styled.div`
  ${tw`absolute pin-b w-full py-8 md:py-4`}
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
      <CollapsableLink fontSize={['sm', 'base']}>source code</CollapsableLink>
      <Text
        fontFamily="sans"
        fontSize={['sm', 'base']}
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
