import { useEffect, useState } from "react";
import { HeaderDesktop } from "./HeaderDesktop/HeaderDesktop";
import { HeaderTabletMobile } from "./HeaderTabletMobile/HeaderTabletMobile";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import "./Header.scss";

export const pages = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Artists', path: '/artists' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Contact', path: '/contact' }
  ];

export interface HeaderProps {
  selectedPage: string;
  setSelectedPage: (page: string) => void;
    isTabletOrMobile: boolean;
}

export function Header() {
  const [selectedPage, setSelectedPage] = useState("home");

  const windowWidth = useWindowWidth();
  const isTabletOrMobile = windowWidth <= 1024;

  useEffect(() => {
    console.log(selectedPage);
  }, [selectedPage]);

  return (
    <div className="header">
      <HeaderDesktop selectedPage={selectedPage} setSelectedPage={setSelectedPage} isTabletOrMobile={isTabletOrMobile} />
      <HeaderTabletMobile selectedPage={selectedPage} setSelectedPage={setSelectedPage} isTabletOrMobile={isTabletOrMobile} />
    </div>
  );
}
