import React, { useState } from "react"
import classnames from "classnames"

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap"

import CommonButtons from "../common/CommonButtons"

import Burger from "../assets/images/burger.svg"
import Times from "../assets/images/icn-x.png"

const Header = () => {
  const [isOpen, setOpen] = useState(false)

  const toggle = () => {
    setOpen(!isOpen)

    if (isOpen === false) {
      document.querySelector(
        "nav.navbar .navbar-toggler-icon"
      ).style.backgroundImage = `url('${Times}')`
      document.querySelector(".navbar-collapse").style.opacity = 1
    } else {
      document.querySelector(
        "nav.navbar .navbar-toggler-icon"
      ).style.backgroundImage = `url('${Burger}')`

      document.querySelector(
        ".dblock.collapse.show.navbar-collapse"
      ).style.opacity = 0
    }

    document.querySelector("body").classList.toggle("scroll-lock")
  }

  return (
    <div className={classnames("nav-wrapper", { overlay: isOpen })}>
      <Navbar expand="md">
        <NavbarBrand>
          <h3 className="nav-title">
            Gruntwork.<span className="nav-title-text">io</span>
          </h3>{" "}
          <NavbarToggler onClick={toggle} />
        </NavbarBrand>

        <Collapse
          isOpen={isOpen}
          navbar
          className={classnames({ dblock: isOpen })}
        >
          <Nav
            className={classnames("collapse-navbar", { dblock: isOpen })}
            navbar
          >
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret className="menu-text">
                Overview
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem className="menu-text">Option 1</DropdownItem>
                <DropdownItem className="menu-text">Option 2</DropdownItem>
                <DropdownItem className="menu-text">Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret className="menu-text">
                Product
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem className="menu-text">Option 1</DropdownItem>
                <DropdownItem className="menu-text">Option 2</DropdownItem>
                <DropdownItem className="menu-text">Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret className="menu-text">
                Why Gruntwork?
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem className="menu-text">Option 1</DropdownItem>
                <DropdownItem className="menu-text">Option 2</DropdownItem>

                <DropdownItem className="menu-text">Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret className="menu-text">
                Use Cases
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem className="menu-text">Option 1</DropdownItem>
                <DropdownItem className="menu-text">Option 2</DropdownItem>

                <DropdownItem className="menu-text">Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <div className="btn-buy">
            <CommonButtons
              btnClass="btn-text btn-hover btn-buy--btn"
              text="Buy Now"
            />
            <p className="btn--text btn-buy--text">Contact Sales</p>
          </div>
        </Collapse>
        {/* <div
          className={classnames("btn-buy btn-buy-mobile", { dblock: isOpen })}
        >
          <CommonButtons
            btnClass="btn-text btn-hover btn-buy--btn"
            text="Buy Now"
          />
          <p className="button btn--text btn-buy--text">Contact Sales</p>
        </div> */}
      </Navbar>
    </div>
  )
}

export default Header
