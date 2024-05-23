import StoreFront from "../Images/brook-placeholder-front.jpeg";
import "./Home.scss";

export function Home() {
  return (
    <div className="home row">
      <img
        width="800px"
        className="storeFrontImage"
        src={StoreFront}
        alt="The Brook Tattoo Studio Header Logo"
      />
    </div>
  );
}
