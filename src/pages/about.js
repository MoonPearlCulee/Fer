import * as React from 'react'
import Layout from './layout.js'
import { StaticImage } from "gatsby-plugin-image"
const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>El acerca de con todos mis datos.
        Me llamo Fernando y vivo en Morelos uwuwuwu
      </p>
      <p>Esta es mi gatita y se llama Veres</p>
      <StaticImage
      src= "../images/Veres.jpg"
      />
      <p>Y esta es Veres de bb</p>
      <StaticImage
      src= "../images/Veresbb.jpg"
      />
    </Layout>
  )
}

export default AboutPage