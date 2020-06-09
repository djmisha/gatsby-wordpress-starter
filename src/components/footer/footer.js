import React from "react"
import FooterCopyright from "./footer-copyright"
import FooterSignature from "./footer-signature"
import Location from "./footer-location"
import Contact from "../utils/contact"

const Footer = ({ siteData }) => {
  // console.log(querydata)
  // console.log(siteData)
  // console.log(siteData.site.siteMetadata)
  return (
    <footer className="site-footer">
      {/* <pre>{JSON.stringify(siteData.site.siteMetadata, null, 2)}</pre> */}
      <Contact />
      <Location siteData={siteData} />
      <FooterCopyright siteData={siteData} />
      <FooterSignature />
    </footer>
  )
}

export default Footer
