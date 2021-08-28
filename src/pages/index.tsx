import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

import Layout from '../components/Layout'
import Seo from '../components/Seo'
import Grid from '../components/Grid'

// images
import image0 from '../assets/img/bg-image-00.jpeg'
import image1 from '../assets/img/bg-image-01.jpeg'
import image2 from '../assets/img/bg-image-02.jpeg'
import image3 from '../assets/img/bg-image-03.jpeg'
import image4 from '../assets/img/bg-image-04.jpeg'
import image5 from '../assets/img/bg-image-05.jpeg'
import image6 from '../assets/img/bg-image-06.jpeg'
import image7 from '../assets/img/bg-image-07.jpeg'
import image8 from '../assets/img/bg-image-08.jpeg'
import image9 from '../assets/img/bg-image-09.jpeg'

const StyledLink = styled(Link)`
  //margin-bottom: 1.45em;
`

const getImageUrl = (num: string | number) =>
  `../assets/img/bg-image-0${num}.jpeg`

const data = [
  { backgroundImage: image0, position: '10 / 1 / 26 / 7', id: '1' },
  { backgroundImage: image1, position: '1 / 18 / 9 / 27', id: '2' },
  { backgroundImage: image2, position: '1 / 36 / 14 / 42', id: '3' },
  { backgroundImage: image3, position: '13 / 11 / 32 / 18', id: '4' },
  { backgroundImage: image4, position: '17 / 32 / 32 / 38', id: '5' },
  { backgroundImage: image5, position: '20 / 46 / 28 / 51', id: '6' },
  { backgroundImage: image6, position: '43 / 1 / 51 / 10', id: '7' },
  { backgroundImage: image7, position: '38 / 14 / 46 / 22', id: '8' },
  { backgroundImage: image8, position: '40 / 26 / 51 / 32', id: '9' },
  {
    backgroundImage: image9,
    position: '37 / 39 / 48 / 47',
    id: '10',
  },
]

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 13rem);
  position: relative;
  align-items: center;
  justify-content: center;
  max-height: 300px;
  @media screen and (min-width: 53em) {
    // FIXME: using 100% as the height causes nothing to display. I believe it has to do with images not loading yet
    background: #0c0c0c;
    // height: 100%;
    height: 100vh;
    max-height: none;
    justify-content: center;
  } ;
`

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Default HTML" />
      <ContentWrapper>
        <Grid items={data} />
      </ContentWrapper>
    </Layout>
  )
}

export default IndexPage
