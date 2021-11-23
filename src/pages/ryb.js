import * as React from 'react'
import Layout from './layout.js'
import { StaticImage } from "gatsby-plugin-image"
const IndexPage = () => {
  return (
    <Layout pageTitle="RyB">
      <p>Albumes RyB</p>
      Alexis Mateo
      <StaticImage
      alt="????"
      src="https://preview.redd.it/xzcydo5pk6g21.gif?format=png8&s=309d39524be71db2aaae8cd3364343720bad29c3"
      />
    </Layout>
  )
}
export default RyBPage