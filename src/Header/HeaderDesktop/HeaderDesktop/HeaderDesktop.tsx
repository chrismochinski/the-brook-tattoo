import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./HeaderDesktop.scss";
import { SiteNavProps, pages } from "../../../App";
import Logo from "../../../Images/brook-logo-nobg-rough.png";

export function HeaderDesktop(props: SiteNavProps) {
  const { selectedPage, setSelectedPage, isTabletOrMobile } = props;
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const maxScroll = 258;
  const scale = scrollPosition < maxScroll ? 1 + scrollPosition / (maxScroll * 2) : 1.5;
  const translateY = scrollPosition < 129 ? -scrollPosition / 12.9 : -10;
  const opacity = scrollPosition < maxScroll ? 1 - scrollPosition / maxScroll : 0;
  const blur = scrollPosition < maxScroll ? scrollPosition / (maxScroll / 5) : 5;

  return (
    <div className={`headerDesktop ${scrollPosition > 155 ? "scrolled" : ""}`}>
      <img
        className="headerLogoDesktop"
        src={Logo}
        style={{
          transform: `scale(${scale}) translateY(${translateY}px)`,
          opacity: opacity,
          filter: `blur(${blur}px)`,
        }}
        alt="The Brook Tattoo Studio Header Logo"
      />
      <div className="desktopNavContainer">
        <nav className="nav desktopNav">
          {pages.map((page) => (
            <Link
              key={page.name}
              to={page.path}
              className={`link desktopLink ${
                selectedPage === page.name.toLowerCase() ? "selected" : ""
              }`}
              onClick={() => setSelectedPage(page.name.toLowerCase())}>
              <p>{page.name}</p>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
