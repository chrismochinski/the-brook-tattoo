import { useState } from "react";
import { Link } from "react-router-dom";
import "./HeaderTabletMobile.scss";
import Logo from "../../../Images/brook-logo-nobg-rough.png";

// idea https://codepen.io/bugrakocak/pen/xodpBR

export function HeaderTabletMobile() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="headerTabletMobile">
      <img
        className="headerLogoTabletMobile"
        src={Logo}
        alt="The Brook Tattoo Studio Header Logo"
      />
      <div tabIndex={0} role="button" className="hamburger" onClick={toggleMenu}>
        🍔
      </div>
      <nav className={`nav ${isOpen ? "open" : ""}`}>
        <Link to="/" className="link mobileLink">
          Home
        </Link>
        <Link to="/about" className="link mobileLink">
          About
        </Link>
        <Link to="/artists" className="link mobileLink">
          Artists
        </Link>
        <Link to="/faq" className="link mobileLink">
          FAQ
        </Link>
        <Link to="/reviews" className="link mobileLink">
          Reviews
        </Link>
        <Link to="/contact" className="link mobileLink">
          Contact
        </Link>
      </nav>
    </div>
  );
}
