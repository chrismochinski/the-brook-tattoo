// import { TypewriterLogo } from "../TypewriterLogo/TypewriterLogo";
import "./TempHeader.scss";
// import JimboMain from "../../src/Images/jimbo-main.jpeg";
// import CarlieMain from "../../src/Images/carlie-main.jpeg";
import Logo from "../../src/Images/brook-logo-nobg-rough.png";

export function TempHeader() {
  return (
    <div className="tempHeaderContainer section row my-0">
      {/* <img className="artistImage jimboImage" src={JimboMain} alt="Jimbo" /> */}
      {/* revisit <TypewriterLogo /> ACTUAL TEXT FOR EFFECTS */}
      <img className="logoImage" src={Logo} alt="The Brook Tattoo Studio" />
      {/* <img className="artistImage carlieImage" src={CarlieMain} alt="Carlie" /> */}
    </div>
  );
}
