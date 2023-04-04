import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  // background: #282c34;
  // background-image: linear-gradient(to bottom, #000000, #282c34);
  height: 10vh;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  z-index: 0;
  margin-left: 0px;
`;

export const NavLink = styled(Link)`
  color: #ffffff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-size: 1.2rem;
  &.active {
    color: #a59e9d;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #808080;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #000000;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), #000000);
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
`;
