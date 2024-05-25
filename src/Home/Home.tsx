import StoreFront from "../Images/brook-placeholder-front.jpeg";
import "./Home.scss";

export function Home() {
  return (
    <div className="home row">
      <div className="imageWrapper">
        <img
          width="100%"
          className="storeFrontImage"
          src={StoreFront}
          alt="The Brook Tattoo Studio Header Logo"
        />
      </div>
    </div>
  );
}
