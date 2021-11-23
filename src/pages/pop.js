import * as React from 'react'
import Layout from './layout.js'
import { StaticImage } from "gatsby-plugin-image"
const IndexPage = () => {
  return (
    <Layout pageTitle="Pop">
      <p>Albumes Pop</p>
      <StaticImage
      alt="Mirrorball"
      src="https://scontent-qro1-2.xx.fbcdn.net/v/t1.6435-9/118227896_2047109205421044_3663583107540423347_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=9blWn41OvfIAX8aCzW2&_nc_ht=scontent-qro1-2.xx&oh=a4e20af687b457f34aa080dffd12b8aa&oe=61C0D8B2"
      />
    </Layout>
  )
}
export default PopPage