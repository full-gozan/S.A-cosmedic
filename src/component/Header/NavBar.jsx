import React from "react";
import "./navBar.css";
import HamburgerMenu from "../component/hamburgerMenu";
import { Link } from "react-router-dom";
import logo from "../images/logo.jpg";
import FollowAt from "react-social-media-follow";
import Exit_button from "../component/hamburgerMenu";

const links = [
  "https://twitter.com/",
  "https://www.facebook.com/",
  "https://www.instagram.com/"
];

const NavBar = (prop) => (
  <header className="toolbar">
    <HamburgerMenu click={prop.slideClickHandler} />
    <nav className="toolbar__navigation">
      <div className="toolbar__navigation_items">
        <ul>
          {" "}
          <li>
            <Link to="AboutUs">
              <h4 className="link">About Us</h4>{" "}
            </Link>
          </li>
          <li>
            <Link to="Treatments">
              <h4 className="link">Treatments</h4>{" "}
            </Link>
          </li>
          <li>
            <Link to="Prices">
              {" "}
              <h4 className="link">Prices</h4>{" "}
            </Link>
          </li>
        </ul>
      </div>
      <div className="toolbar__navigation_logo">
        <Link to="/">
          <img src={logo} alt="not found" />
        </Link>
      </div>
    </nav>
  </header>
);

export default NavBar;
