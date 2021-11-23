import * as React from 'react'
import Layout from './layout.js'
import { StaticImage } from "gatsby-plugin-image"
const PopPage = () => {
  return (
    <Layout pageTitle="Pop">
      <p>Albumes Pop</p>
      <p>Cowboy like me</p>
      <StaticImage
      alt="Mirrorball"
      width ="400px"
      src="https://scontent-qro1-2.xx.fbcdn.net/v/t1.6435-9/118227896_2047109205421044_3663583107540423347_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=9blWn41OvfIAX8aCzW2&_nc_ht=scontent-qro1-2.xx&oh=a4e20af687b457f34aa080dffd12b8aa&oe=61C0D8B2"
      />
      <p>Enter</p>
      caballo
      <audio controls>
        <source src="../music/horse.ogv" type="audio/ogg"></source>
      </audio>
      <audio controls>
        <source src="./cowboylikeme.mp3" type="audio/mpeg"></source>
        Tu navegador no es compatible con esta fuente.
      </audio>
    </Layout>
  )
}
export default PopPage