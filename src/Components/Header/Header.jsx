import React, {useState} from "react";
import "./header.scss";
import hdr_background from "../../images/image-hero-desktop.jpg";
import logo from "../../images/logo.svg";
import hamburger from "../../images/icon-hamburger.svg";
import { useViewport } from "../../Hooks/useViewport.js";
import { HAMBURGER_STYLE } from "../../Modal_Style/modal_style";
import Modal from 'react-modal';
import HamburgerContent from "../HamburgerContent/HamburgerContent";

function Header() {
  const [hamburgerUp, setHamburgerUp] = useState(false)
  const { width } = useViewport();
  const brakepoint = 760;

  return (
    <div
      className="Header"
      style={{ backgroundImage: `url(${hdr_background})` }}
    >
      <div className="content">
        <img src={logo} alt="logo" />

        {width > brakepoint ? (
          <ul>
            <li>About</li>
            <li>Discover</li>
            <li>Get Started</li>
          </ul>
        ) : (
          <img onClick={()=> setHamburgerUp(true)} src={hamburger} alt='hamburger'/>
        )}

        <Modal isOpen={hamburgerUp} style={HAMBURGER_STYLE}>
          <HamburgerContent setHamburgerUp={setHamburgerUp} />
        </Modal>
      </div>
    </div>
  );
}

export default Header;
