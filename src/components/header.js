import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import NavigationMain from "./navigation-main"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#ee6c4d`,
      marginBottom: `1.45rem`,

      padding: `20px`,
    }}
  >
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        maxWidth: 1080,
        margin: "0 auto",
      }}
    >
      <span style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </span>
      <NavigationMain />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
