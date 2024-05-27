import "./Footer.scss";
import { Facebook, Instagram, Twitter } from "../svg";

interface FooterProps {
  isTabletOrMobile: boolean;
}

export function Footer(props: FooterProps) {
  const { isTabletOrMobile } = props;
  return (
    <div className="footer">
      <div className="footerContentWrapper">
        <div className="footerFlexSplit">
          <div className="left">
            <h4>The Brook Tattoo</h4>
            <div className="address">
              <h6>105 2nd St E</h6>
              <h6 className="divider"> | </h6>
              <h6>Hastings, MN</h6>
              <h6 className="divider"> | </h6>
              <h6 className="phone">651-346-1153</h6>
            </div>
          </div>
          <div className="socials">
            <Facebook />
            <Instagram />
            <Twitter />
          </div>
        </div>
        <p className="copyright">Copyright &copy; The Brook Tattoo - All Rights Reserved</p>
      </div>
    </div>
  );
}
