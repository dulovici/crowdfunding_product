import React from "react";
import "./header.scss";
import hdr_background from "../../images/image-hero-desktop.jpg";
import logo from "../../images/logo.svg";

function Header() {
  return (
    <div
      className="Header"
      style={{ backgroundImage: `url(${hdr_background})` }}
    >
      <div className="content">
          <img src={logo} alt="logo" />
          <ul>
              <li>About</li>
              <li>Discover</li>
              <li>Get Started</li>
          </ul>
      </div>
    </div>
  );
}

export default Header;
