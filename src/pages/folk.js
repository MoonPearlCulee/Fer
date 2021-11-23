import * as React from 'react'
import Layout from './layout.js'
import { StaticImage } from "gatsby-plugin-image"
const FolkPage = () => {
  return (
    <Layout pageTitle="Folklore">
      <p>Albumes Pop</p>
      <StaticImage
      alt="Mirrorball"
      src="https://i.pinimg.com/564x/ec/66/96/ec66964c084324cfcb3266686d4efd2d.jpg"
      />
    </Layout>
  )
}
export default FolkPage