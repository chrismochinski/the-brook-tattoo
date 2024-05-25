import StoreFront from "../Images/brook-placeholder-front.jpeg";
import "./Home.scss";

export function Home() {
  return (
    <div className="home">
      <div className="imageWrapper section">
        <div className="imageInnerWrapper">
          <img
            width="100%"
            className="storeFrontImage"
            src={StoreFront}
            alt="The Brook Tattoo Studio Header Logo"
          />
          <div className="titleOverlay">
            <div className="titleBar">
              <h1 className="backgroundTitle">The Brook Tattoo</h1>
              <h1>The Brook Tattoo</h1>
            </div>
            <div className="subtitleBar">
              <h2>Hastings, Minnesota</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
