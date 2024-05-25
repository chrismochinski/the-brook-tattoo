import { useState } from "react";
import { Link } from "react-router-dom";
import "./HeaderTabletMobile.scss";
import { HeaderProps, pages } from "../Header";
import Logo from "../../../Images/brook-logo-nobg-rough.png";

export function HeaderTabletMobile(props: HeaderProps) {
  const { selectedPage, setSelectedPage, isTabletOrMobile } = props;
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (page: string) => {
    setSelectedPage(page);
    setIsOpen(false);
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
      <nav className={`nav mobileNav ${isOpen ? "open" : ""}`}>
        {pages.map((page) => (
          <Link
            key={page.name}
            to={page.path}
            className={`link mobileLink ${
              selectedPage === page.name.toLowerCase() ? "selected" : ""
            }`}
            onClick={() => handleLinkClick(page.name.toLowerCase())}>
            <p>{page.name}</p>
          </Link>
        ))}
      </nav>
    </div>
  );
}
