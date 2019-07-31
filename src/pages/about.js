import React from 'react'
import styled from 'styled-components'
import Layout from '../components/templates/Layout'
import Header from '../components/organisms/Header'
import Text from '../components/atoms/Text'
import Paragraph from '../components/atoms/Paragraph'
import Box from '../components/atoms/Box'
import Icon from '../components/atoms/Icon'
import Avatar from '../components/atoms/Avatar'

const TopLayer = styled.section`
  ${tw`w-full px-8 md:px-12`}
  z-index: 5;
  padding-top: 100px;
`

const InfoContainer = styled.article`
  ${tw`flex flex-col my-8`}
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

const generalRows = [
  {
    name: 'Age',
    text: '24 years old',
  },
  {
    name: 'Location',
    text: 'Szczecin, Poland',
  },
  {
    name: 'Roles',
    text:
      'Front-end developer, Full-stack JavaScript developer, UI Designer/Developer, Back-end Node.js developer',
  },
]

const skillsRows = [
  {
    name: 'Front end',
    text:
      'HTML5, CSS3, SCSS, RWD, JavaScript, React.js, Redux, Next.js, Gatsby',
  },
  {
    name: 'Back end',
    text: 'Node.js, Express, Sails.js, C#',
  },
  {
    name: 'Other',
    text: 'MongoDB, mySQL, OAuth2, REST',
  },
  {
    name: 'UI Design',
    text: 'MongoDB, mySQL, OAuth2, REST',
  },
]

const About = () => (
  <Layout>
    <Header />
    <Box pt={[8]} maxWidth={1200} m="auto" px={[6, 6, 12, 16, 24]}>
      <Text
        display={['block', 'block', 'inline-block']}
        fontColor="primary.8"
        fontWeight="black"
        fontSize="4xl"
        textAlign={['center', 'center', 'left']}
      >
        About the author.
      </Text>
      <Box
        display="flex"
        flexDirection={['column', 'column', 'row']}
        alignItems="center"
        my={8}
      >
        <Avatar x={200} y={200} src="profile-picture.jpg" mr={[0, 0, 16]} />
        <Text
          fontColor="primary.7"
          fontSize={['base', 'lg']}
          withLine
          mt={6}
          lineHeight="relaxed"
        >
          I love to create websites and web applications, paying close attention
          to all the small details. No matter if you are a startup in need of a
          landing page, a small business who wants a unique web shop, or an
          entrepreneur who has an idea for an exciting web application.
        </Text>
      </Box>

      <Box display="flex" flexDirection="column" maxWidth={900}>
        <Box width={1} m="auto">
          <Text
            fontColor="primary.8"
            fontSize={['2xl']}
            fontWeight="black"
            mt={8}
            mb={4}
          >
            General
          </Text>
          {generalRows.map((row, idx) => (
            <Box display="flex" py={6} borderTop="1px solid rgba(0,0,0,0.1)">
              <Text
                width={[1 / 2]}
                fontFamily="sans"
                fontColor="primary.7"
                fontSize={['sm', 'base']}
                pr={2}
              >
                {row.name}
              </Text>
              <Text
                width={[5 / 6, 5 / 6, 1 / 2]}
                fontFamily="sans"
                fontColor="primary-600"
                fontSize={['sm', 'base']}
                pl={2}
              >
                {row.text}
              </Text>
            </Box>
          ))}
        </Box>
        <Box width={1} m="auto">
          <Text
            fontColor="primary.8"
            fontSize={['2xl']}
            fontWeight="black"
            mt={8}
            mb={4}
          >
            Skills
          </Text>
          {skillsRows.map((row, idx) => (
            <Box display="flex" py={6} borderTop="1px solid rgba(0,0,0,0.1)">
              <Text
                width={[1 / 2]}
                fontFamily="sans"
                fontColor="primary.7"
                fontSize={['sm', 'base']}
                pr={2}
              >
                {row.name}
              </Text>
              <Text
                width={[5 / 6, 5 / 6, 1 / 2]}
                fontFamily="sans"
                fontColor="primary-600"
                fontSize={['sm', 'base']}
                pl={2}
              >
                {row.text}
              </Text>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
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
  </Layout>
)

export default About
