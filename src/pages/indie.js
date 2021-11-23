import * as React from 'react'
import Layout from './layout.js'
import { StaticImage } from "gatsby-plugin-image"
const IndiePage = () => {
  return (
    <Layout pageTitle="Indie">
      <p>Albumes Pop</p>
      <StaticImage
      alt="Norman F Rockwell"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsfEuYjojhgHyUKi4B2brCRILW7neMD0YaeQ&usqp=CAU"
      />
    </Layout>
  )
}
export default IndiePage