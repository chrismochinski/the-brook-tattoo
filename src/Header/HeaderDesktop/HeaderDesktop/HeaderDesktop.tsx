import { Link } from "react-router-dom";
import "./HeaderDesktop.scss";
import Logo from "../../../Images/brook-logo-nobg-rough.png";

// idea - HOVER LEFT BAR SWIPE RIGHT BG BLUR

export function HeaderDesktop() {
  return (
    <div className="headerDesktop">
      <img className="headerLogoDesktop" src={Logo} alt="The Brook Tattoo Studio Header Logo" />

      <nav className="nav">
        <Link to="/" className="link desktopLink">
          <p>Home</p>
        </Link>
        <Link to="/about" className="link desktopLink">
          <p>About</p>
        </Link>
        <Link to="/artists" className="link desktopLink">
          <p>Artists</p>
        </Link>
        <Link to="/faq" className="link desktopLink">
          <p>FAQ</p>
        </Link>
        <Link to="/reviews" className="link desktopLink">
          <p>Reviews</p>
        </Link>
        <Link to="/contact" className="link desktopLink">
          <p>Contact</p>
        </Link>
      </nav>
    </div>
  );
}
