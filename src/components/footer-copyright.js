import React from "react"
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
    <div>
      © {new Date().getFullYear()}, {data.site.siteMetadata.title} | {` `}
      <a href="https://www.asburymediagroup.com">Privacy Policy</a>
      {` `} | {` `}
      <a href="https://www.asburymediagroup.com">Sitemap</a>
    </div>
  )
}

export default FooterCopyright
