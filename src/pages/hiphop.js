import * as React from 'react'
import Layout from './layout.js'
import { StaticImage } from "gatsby-plugin-image"
const HipHopPage = () => {
  return (
    <Layout pageTitle="HipHop">
      <p>Albumes Pop</p>
      <StaticImage
      alt="????"
      src="https://dancemotion.es/wp-content/uploads/2020/12/pasos-de-hip-hop.jpg"
      />
    </Layout>
  )
}
export default HipHopPage