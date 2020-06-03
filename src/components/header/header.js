import React from "react"
import PropTypes from "prop-types"
import Logo from "../logo/logo"
import NavigationMain from "../navigation/navigation-main"

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuClass: "main-nav-closed",
    }
    this.handleMenuChange = this.handleMenuChange.bind(this)
  }
  handleMenuChange() {
    // console.log(this.state)
    const changemenu =
      this.state.menuClass === "main-nav-closed"
        ? "main-nav-open"
        : "main-nav-closed"
    this.setState({ menuClass: changemenu })
  }
  render() {
    return (
      <header className="site-header">
        <div className="navigation-bar">
          <Logo />
          <button onClick={this.handleMenuChange} className="menu-toggle">
            menu
          </button>
          <div className={this.state.menuClass}>
            <NavigationMain />
          </div>
        </div>
      </header>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
