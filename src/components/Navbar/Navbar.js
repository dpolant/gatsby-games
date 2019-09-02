import React from "react"
import Appbar from "../Appbar"

const Navbar = class extends React.Component {
  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <Appbar />
      </nav>
    )
  }
}

export default Navbar
