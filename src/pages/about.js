import React from 'react'
import styled from 'styled-components'
import Layout from '../components/templates/Layout'
import Header from '../components/organisms/Header'
import Text from '../components/atoms/Text'
import Paragraph from '../components/atoms/Paragraph'
import { ContentWrapper } from '../components/atoms/Wrapper'
import Icon from '../components/atoms/Icon'

const TopLayer = styled.section`
  ${tw`w-full px-8 md:px-12`}
  z-index: 5;
  padding-top: 100px;
`

const InfoContainer = styled.article`
  ${tw`flex flex-col md:flex-row my-8`}
`

const InfoColumn = styled.div`
  ${tw`w-full md:w-1/2 py-4`}
`

const LooseSubheading = styled.h2`
  ${tw`font-sans text-lg tracking-wide uppercase`}
`

const InfoRow = styled.div`
  ${tw`flex items-center py-2`}

  & > h1 {
    flex: 1;
  }

  & > div {
    flex: 2;
  }
`
const Socials = styled.footer`
  ${tw`flex flex-col items-center mt-32`}
`

const IconsContainer = styled.div`
  ${tw`flex my-8`}
`

const Line = styled.span`
  ${tw`bg-primary-400`}
  width: 50%;
  height: 1px;
  top: -1em;
`

const Ellipse = styled.div`
  ${tw`flex justify-center items-center w-10 h-10 bg-primary-800 rounded-full mx-1`}
`

const About = () => (
  <Layout>
    <Header variant="secondary" />
    <TopLayer>
      <ContentWrapper>
        <Text fontColor="primary.7" fontWeight="black" fontSize="5xl">
          Daniel Domański.
        </Text>
        <Paragraph fontColor="primary.6" fontSize="lg" withLine my={12}>
          I love to create websites and web applications, paying close attention
          to all the small details. No matter if you are a startup in need of a
          landing page, a small business who wants a unique web shop, or an
          entrepreneur who has an idea for an exciting web application.
        </Paragraph>
        <InfoContainer>
          <InfoColumn>
            <LooseSubheading>General</LooseSubheading>
            <InfoRow>
              <Text
                fontFamily="sans"
                fontColor="primary.7"
                fontWeight="bold"
                fontSize="sm"
              >
                Age
              </Text>
              <Paragraph fontColor="primary-600" size="sm" mx={4}>
                24 years old
              </Paragraph>
            </InfoRow>
            <InfoRow>
              <Text
                fontFamily="sans"
                fontColor="primary.7"
                fontWeight="bold"
                fontSize="sm"
              >
                Location
              </Text>
              <Paragraph fontColor="primary-700" size="sm" mx={4}>
                Szczecin, Poland
              </Paragraph>
            </InfoRow>
            <InfoRow>
              <Text
                fontFamily="sans"
                fontColor="primary.7"
                fontWeight="bold"
                fontSize="sm"
              >
                Roles
              </Text>
              <Paragraph fontColor="primary-700" size="sm" mx={4}>
                Front-end developer
                <br />
                Full-stack JavaScript developer
                <br /> UI Designer/Developer
                <br /> Back-end Node.js developer
              </Paragraph>
            </InfoRow>
          </InfoColumn>
          <InfoColumn>
            <LooseSubheading>Skills</LooseSubheading>
            <InfoRow>
              <Text
                fontFamily="sans"
                fontColor="primary.7"
                fontWeight="bold"
                fontSize="sm"
              >
                Have experience with
              </Text>
              <Paragraph fontColor="primary-700" size="sm" mx={4}>
                HTML5, CSS3, SCSS, RWD, JavaScript, React.js, Redux, Next.js,
                Gatsby, Node.js, Express, Sails.js, C#, MongoDB, mySQL, OAuth2,
                REST
              </Paragraph>
            </InfoRow>
            <InfoRow>
              <Text
                fontFamily="sans"
                fontColor="primary.7"
                fontWeight="bold"
                fontSize="sm"
              >
                Current enviroment & tools
              </Text>
              <Paragraph fontColor="primary-700" size="sm" mx={4}>
                Windows, Visual Studio Code, Figma, Adobe XD
              </Paragraph>
            </InfoRow>
          </InfoColumn>
        </InfoContainer>
      </ContentWrapper>
      <Socials>
        <Line />
        <IconsContainer>
          <Ellipse>
            <Icon icon="github" fill="#f0f0f0" width="21px" />
          </Ellipse>
          <Ellipse>
            <Icon icon="linkedin" fill="#f0f0f0" width="21px" />
          </Ellipse>
        </IconsContainer>
      </Socials>
    </TopLayer>
  </Layout>
)

export default About
