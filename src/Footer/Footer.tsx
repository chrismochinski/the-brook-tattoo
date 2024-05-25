import { SiteNavProps, pages } from "../App";
import "./Footer.scss";

export function Footer(props: SiteNavProps) {
  const { selectedPage, setSelectedPage, isTabletOrMobile } = props;
  return (
    <div className="footer">
      <div className="footerContentWrapper">
        {/* Loop through the siz pages and create two columns of three */}
        <div className="footerColumn">
          {pages.slice(0, 3).map((page) => {
            return (
              <div
                className={`footerLink ${
                  selectedPage === page.name.toLowerCase() ? "selected" : ""
                }`}
                onClick={() => setSelectedPage(page.name.toLowerCase())}>
                {page.name}
              </div>
            );
          })}
        </div>
        <div className="footerColumn">
          {pages.slice(3, 6).map((page) => {
            return (
              <div
                className={`footerLink ${
                  selectedPage === page.name.toLowerCase() ? "selected" : ""
                }`}
                onClick={() => setSelectedPage(page.name.toLowerCase())}>
                {page.name}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
