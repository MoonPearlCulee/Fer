import * as React from 'react'
import Layout from './layout.js'
import { StaticImage } from "gatsby-plugin-image"
const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>El acerca de con todos mis datos.
        Me llamo Fernando y vivo en Morelos uwuwuwu
      </p>
      <StaticImage
      src= "C:/Veres/Veres.jpg"
      />
    </Layout>
  )
}

export default AboutPage