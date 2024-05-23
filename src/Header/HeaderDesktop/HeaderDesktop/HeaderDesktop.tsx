import { Link } from "react-router-dom";
import "./HeaderDesktop.scss";
import Logo from "../../../Images/brook-logo-nobg-rough.png";

export function HeaderDesktop() {
  return (
    <div className="headerDesktop">
      <img className="headerLogoDesktop" src={Logo} alt="The Brook Tattoo Studio Header Logo" />

      <nav className="nav">
        <Link to="/" className="link desktopLink">
          Home
        </Link>
        <Link to="/about" className="link desktopLink">
          About
        </Link>
        <Link to="/artists" className="link desktopLink">
          Artists
        </Link>
        <Link to="/faq" className="link desktopLink">
          FAQ
        </Link>
        <Link to="/reviews" className="link desktopLink">
          Reviews
        </Link>
        <Link to="/contact" className="link desktopLink">
          Contact
        </Link>
      </nav>
    </div>
  );
}
