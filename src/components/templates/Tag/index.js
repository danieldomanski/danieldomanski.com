import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Footer from '../../organisms/Footer'
import Layout from '../Layout'
import Header from '../../organisms/Header'
import Text from '../../atoms/Text'
import Icon from '../../atoms/Icon'
import Box from '../../atoms/Box'
import BottomBox from '../../organisms/Footer/BottomBox'
import { formatDate } from '../../../utilitity/date'

const Main = styled(Box)`
  ${tw`relative bg-primary-100 `}
  padding-bottom: 600px;

  @media screen and (min-width: 768px) {
    margin-bottom: 100px;
    padding-bottom: 0;
  }
  z-index: 5;
`

const Tag = ({ data, pageContext }) => {
  const abc = 'abc'

  return (
    <Layout>
      <Header variant="secondary" />
      <Main bg="primary.1" m="auto" px={[4, 8, 16, 24, 32]}>
        abc
      </Main>
      <Footer>
        <BottomBox />
      </Footer>
    </Layout>
  )
}

export default Tag

/*
export const pageQuery = graphql`
  
`
*/
