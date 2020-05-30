import React from "react"

const NavigationMain = () => {
  const theMenu = "Home | About"
  return (
    <div
      className="main-nav"
      style={{
        fontSize: "14px",
        color: "#FFFFFF",
        textTransform: "uppercase",
        fontFamily: "inherit",
      }}
    >
      {theMenu}
    </div>
  )
}

export default NavigationMain
