import React, {Component} from 'react'
import { Button } from 'reactstrap';
import {Navbar, NavbarBrand} from 'reactstrap'

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto">Activity Recommendation</NavbarBrand>
        </Navbar>

      </div>
    )
  }
}

export default Header
