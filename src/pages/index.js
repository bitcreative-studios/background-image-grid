import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

import Layout from '../components/layout'
import Seo from '../components/seo'
import basicImgUrl from '../assets/img/bg-image-00.jpeg'

const StyledLink = styled(Link)`
  //margin-bottom: 1.45em;
`

const IndexPage = () => (
  <Layout>
    <Seo title="Default HTML" />
    <section>
      <hgroup>
        <h1>h1 HTML5 Kitchen Sink</h1>
        <h2>
          h2 Back in my quaint <a href="#">garden</a>
        </h2>
        <h3>
          h3 Jaunty <a href="#">zinnias</a> vie with flaunting phlox
        </h3>
        <h4>h4 Five or six big jet planes zoomed quickly by the new tower.</h4>
        <h5>
          h5 Expect skilled signwriters to use many jazzy, quaint old alphabets
          effectively.
        </h5>
        <h6>h6 Pack my box with five dozen liquor jugs.</h6>
      </hgroup>
    </section>
    <button>This is a button</button>

    <div>
      <p>StaticImage Component</p>
      <StaticImage src="../assets/img/bg-image-01.jpeg" alt="floating laptop" />
    </div>
    <div>
      <p>HTML5 img tag</p>
      <img src={basicImgUrl} alt="colorful source code" />
    </div>
  </Layout>
)

export default IndexPage
