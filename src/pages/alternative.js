import * as React from 'react'
import Layout from './layout.js'
import { StaticImage } from "gatsby-plugin-image"
const AlternativePage = () => {
  return (
    <Layout pageTitle="Alternative">
      <p>Albumes alternativos</p>
      Quitenle picsart a Lana
      <StaticImage
      alt="????"
      src="https://jenesaispop.com/wp-content/uploads/2021/04/bluebanisters-696x684.jpg"
      />
    </Layout>
  )
}
export default AlternativePage