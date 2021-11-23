import * as React from 'react'
import Layout from './layout.js'
import { StaticImage } from "gatsby-plugin-image"
const RapPage = () => {
  return (
    <Layout pageTitle="Rap">
      <p>Albumes de Rap</p>
      Alexis Mateo
      <StaticImage
      alt="????"
      src="https://i.pinimg.com/736x/2a/24/0b/2a240b0825162ec1d025d2b2e09ed9e3.jpg"
      />
    </Layout>
  )
}
export default RapPage