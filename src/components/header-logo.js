import React from "react"
import FooterCopyright from "./footer-copyright"
import FooterSignature from "./footer-signature"

const Footer = () => {
  return (
    <footer
      style={{
        margin: `0 auto`,
        maxWidth: 1080,
        textAlign: "center",
        fontSize: `.8em`,
      }}
    >
      <FooterCopyright />
      <FooterSignature />
    </footer>
  )
}

export default Footer
