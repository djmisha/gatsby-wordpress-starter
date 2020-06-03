import React from "react"
import { Link } from "gatsby"

class Logo extends React.Component {
  //   constructor(props) {
  // super(props)
  //   }
  render() {
    // console.log(this.props)
    return (
      <div className="site-logo">
        <Link to="/">Logo</Link>
      </div>
    )
  }
}

export default Logo
