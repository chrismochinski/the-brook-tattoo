import { Link } from "react-router-dom";
import "./HeaderDesktop.scss";
import { HeaderProps, pages } from "../Header";
import Logo from "../../../Images/brook-logo-nobg-rough.png";

export function HeaderDesktop(props: HeaderProps) {
  const { selectedPage, setSelectedPage, isTabletOrMobile } = props;

  return (
    <div className="headerDesktop">
      <img className="headerLogoDesktop" src={Logo} alt="The Brook Tattoo Studio Header Logo" />
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
  );
}
