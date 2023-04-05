import React from "react";
import { Nav, NavLink, Bars, NavMenu, Footer } from "./NavbarElements";
import Logo from "./logo.png";
import "./nav.css";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src={Logo} alt="logo" style={{ height: 50 }} />
        </NavLink>
        <Bars />

        <NavMenu>
          <NavLink to="/home" activeStyle>
            Home
          </NavLink>
          <div class="dropdown">
            <button class="dropdown">About</button>
            <div class="dropdown-content">
              <NavLink to="/aboutgid" activeStyle>
                How To
              </NavLink>
              <NavLink to="/aboutus" activeStyle>
                About Us
              </NavLink>
            </div>
          </div>
          <NavLink to="/begin" activeStyle>
            Begin
          </NavLink>
          <NavLink to="/howto" activeStyle>
            How To
          </NavLink>
        </NavMenu>
      </Nav>
      <Footer>
        <p>&copy; 2023 - All rights reserved</p>
      </Footer>
    </>
  );
};

export default Navbar;
