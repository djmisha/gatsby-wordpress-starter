import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

console.log(PropTypes.site)
class Logo extends React.Component {
  render() {
    return (
      <div className="site-logo">
        <Link to="/">Asbury Media Group</Link>
      </div>
    )
  }
}

export default Logo
