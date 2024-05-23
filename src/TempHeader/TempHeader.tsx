import "./TempHeader.scss";
import Logo from "../../src/Images/brook-logo-nobg-rough.png";

export function TempHeader() {
  return (
    <div className="tempHeaderContainer section column">
      <img className="logoImage" src={Logo} alt="The Brook Tattoo Studio Header Logo" />
      <h2 className="locationText">Hastings, Minnesota</h2>
    </div>
  );
}
