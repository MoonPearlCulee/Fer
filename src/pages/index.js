import * as React from 'react'
import Layout from './layout.js'
import { StaticImage } from "gatsby-plugin-image"
const IndexPage = () => {
  return (
    <Layout pageTitle="Página principal">
      <p>Mi primera página web en internet.</p>
      <StaticImage
      alt="Un cacahuadolar valido en cualquier cacahuatienda participante uwu"
      src="https://i.pinimg.com/564x/ec/66/96/ec66964c084324cfcb3266686d4efd2d.jpg"
      />
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/taylor-swift-attends-the-all-too-well-new-york-premiere-on-news-photo-1636823911.jpg?width=640&auto=webp&optimize=medium&io=1"
        width = "500"
      />
    </Layout>
  )
}
export default IndexPage