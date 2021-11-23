import * as React from 'react'
import Layout from './layout.js'
import { StaticImage } from "gatsby-plugin-image"
const IndexPage = () => {
  return (
    <Layout pageTitle="Ranchera">
      <p>Albumes Pop</p>
      Chico vaca como yo
      <StaticImage
      alt="Chico Vaca como yo"
      src="https://poptaim.com/wp-content/uploads/2020/11/bkbk-900x600.jpg"
      />
    </Layout>
  )
}
export default RancheraPage