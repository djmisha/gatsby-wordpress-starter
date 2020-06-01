import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

const FooterCopyright = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQueryFooter {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <div className="footer-copyright">
      © {new Date().getFullYear()}, {data.site.siteMetadata.title}
      {/* | {` `} */}
      {/* <Link to="/privacy-policy/">Privacy Policy</Link> */}
      {` `} | {` `} <Link to="/sitemap/">Sitemap</Link>
    </div>
  )
}

export default FooterCopyright
