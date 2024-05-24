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
          <p>Home</p>
        </Link>
        <Link to="/about" className="link mobileLink">
          <p>About</p>
        </Link>
        <Link to="/artists" className="link mobileLink">
          <p>Artists</p>
        </Link>
        <Link to="/faq" className="link mobileLink">
          <p>FAQ</p>
        </Link>
        <Link to="/reviews" className="link mobileLink">
          <p>Reviews</p>
        </Link>
        <Link to="/contact" className="link mobileLink">
          <p>Contact</p>
        </Link>
      </nav>
    </div>
  );
}
