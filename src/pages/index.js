import * as React from 'react'
import Layout from 'C:\ICC_SEMESTRES\ICCSEMESTREVIII\Desarrollo de apps web\No1\No1\src\pages\layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Te amo chikistrikis uwu.</p>
      <img
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://i.pinimg.com/736x/67/07/ef/6707ef2927af272b414c07f963a015d3.jpg"
        width = "500"
      />
    </Layout>
  )
}
export default IndexPage