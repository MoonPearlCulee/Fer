import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
} from '../components/layout.module.css'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
  query MyQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
  `)
  //console.log(data);
  return (
    <div className={container}>
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      <p className = {siteTitle}>{data.site.siteMetadata.title}</p>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/pop" className={navLinkText}>
              Pop
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/country" className={navLinkText}>
              Country
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/folk" className={navLinkText}>
              Folk
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/indie" className={navLinkText}>
              Indie
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/rock" className={navLinkText}>
              Rock
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/alternative" className={navLinkText}>
              Alternativo
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/ranchera" className={navLinkText}>
              Ranchera
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/rap" className={navLinkText}>
              Rap
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/hiphop" className={navLinkText}>
              HipHop
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout