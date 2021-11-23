import * as React from 'react'
import Layout from './layout.js'
import { StaticImage } from "gatsby-plugin-image"
const RockPage = () => {
  return (
    <Layout pageTitle="Rock">
      <p>Albumes Pop</p>
      <StaticImage
      alt="Rock"
      src="https://i.pinimg.com/564x/ec/66/96/ec66964c084324cfcb3266686d4efd2d.jpg"
      />
    </Layout>
  )
}
export default RockPage