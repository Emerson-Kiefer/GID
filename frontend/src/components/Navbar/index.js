import React from "react";
import { Nav, NavLink, Bars, NavMenu, Footer } from "./NavbarElements";
import Logo from "./logo.png";

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
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/events" activeStyle>
            Events
          </NavLink>
          <NavLink to="/team" activeStyle>
            Teams
          </NavLink>
          <NavLink to="/blogs" activeStyle>
            Blogs
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
