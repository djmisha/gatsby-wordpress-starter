import React from "react"
import FooterCopyright from "./footer-copyright"
import FooterSignature from "./footer-signature"
import Contact from "./contact"

const Footer = () => {
  return (
    <footer className="footer">
      <Contact />
      <FooterCopyright />
      <FooterSignature />
    </footer>
  )
}

export default Footer
