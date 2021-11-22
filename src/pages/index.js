import * as React from 'react'
import Layout from 'C:/ICC_SEMESTRES/ICCSEMESTREVIII/Desarrollo de apps web/No1/No1/src/pages/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <img
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
        width = "500"
      />
      <div>Hola hola hola</div>
      <div>PPPPPPPP</div>
    </Layout>
  )
}
export default IndexPage