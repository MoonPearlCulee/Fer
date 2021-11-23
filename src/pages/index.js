import * as React from 'react'
import Layout from './layout.js'
import { StaticImage } from "gatsby-plugin-image"
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Te amo chikistrikis uwu.</p>
      <StaticImage
      alt="Un cacahuadolar valido en cualquier cacahuatienda participante uwu"
      src="https://i.pinimg.com/564x/ec/66/96/ec66964c084324cfcb3266686d4efd2d.jpg"
      />
      <img
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://i.pinimg.com/736x/67/07/ef/6707ef2927af272b414c07f963a015d3.jpg"
        width = "500"
      />
    </Layout>
  )
}
export default IndexPage