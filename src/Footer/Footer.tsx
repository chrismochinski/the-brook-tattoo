import "./Footer.scss";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "../svg";

export function Footer() {
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

            <a className="email" href="mailto:thebrooktattoo@gmail.com">
              thebrooktattoo@gmail.com
            </a>
          </div>
          <div className="socials">
            <Link
              to="https://www.facebook.com/p/The-Brook-100063729277864/"
              target="_blank"
              className="socialLink">
              <Facebook />
            </Link>
            <Link
              to="https://www.instagram.com/thebrooktattoo/"
              target="_blank"
              className="socialLink">
              <Instagram />
            </Link>
            <Link to="https://x.com/JimboTattoo" target="_blank" className="socialLink">
              <Twitter />
            </Link>
          </div>
        </div>
        <p className="copyright">Copyright &copy; The Brook Tattoo - All Rights Reserved</p>
      </div>
    </div>
  );
}
