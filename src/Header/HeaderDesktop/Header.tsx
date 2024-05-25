import { useEffect } from "react";
import { HeaderDesktop } from "./HeaderDesktop/HeaderDesktop";
import { HeaderTabletMobile } from "./HeaderTabletMobile/HeaderTabletMobile";
import "./Header.scss";
import { SiteNavProps } from "../../App";

export function Header({ selectedPage, setSelectedPage, isTabletOrMobile }: SiteNavProps) {
  useEffect(() => {
    console.log(selectedPage);
  }, [selectedPage]);

  return (
    <div className="header">
      <HeaderDesktop
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isTabletOrMobile={isTabletOrMobile}
      />
      <HeaderTabletMobile
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isTabletOrMobile={isTabletOrMobile}
      />
    </div>
  );
}
