import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./HeaderTabletMobile.scss";
import { SiteNavProps, pages } from "../../../App";
import Logo from "../../../Images/brook-logo-nobg-rough.png";

export function HeaderTabletMobile(props: SiteNavProps) {
  const { selectedPage, setSelectedPage, isTabletOrMobile } = props;
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (page: string) => {
    setSelectedPage(page);
    setIsOpen(false);
  };

  useEffect(() => {
    if (!isTabletOrMobile) {
      setIsOpen(false);
    }
  }, [isTabletOrMobile]);

  return (
    <div className="headerTabletMobile">
      <img
        className="headerLogoTabletMobile"
        src={Logo}
        alt="The Brook Tattoo Studio Header Logo"
      />
      <div
        tabIndex={0}
        id="nav-icon"
        role="button"
        onClick={toggleMenu}
        className={isOpen ? "open" : ""}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
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
