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
      <div className="bio section">
        <p>
          At The Brook, every detail has been meticulously crafted with passion and dedication. From
          the sleek, classy design to the spacious, open floor plan, our studio exudes an atmosphere
          of warmth and sophistication that clients can't help but admire. As a private studio, we
          pride ourselves on offering a more intimate tattoo experience, where clients feel truly
          involved and valued. Step into our world, where every tattoo is a collaborative journey
          and every client is treated with the utmost care and respect.
        </p>
      </div>
      <div className="bio section">
        <p>
          At The Brook, every detail has been meticulously crafted with passion and dedication. From
          the sleek, classy design to the spacious, open floor plan, our studio exudes an atmosphere
          of warmth and sophistication that clients can't help but admire. As a private studio, we
          pride ourselves on offering a more intimate tattoo experience, where clients feel truly
          involved and valued. Step into our world, where every tattoo is a collaborative journey
          and every client is treated with the utmost care and respect.
        </p>
      </div>
     
      <div className="bio section">
        <p>
          At The Brook, every detail has been meticulously crafted with passion and dedication. From
          the sleek, classy design to the spacious, open floor plan, our studio exudes an atmosphere
          of warmth and sophistication that clients can't help but admire. As a private studio, we
          pride ourselves on offering a more intimate tattoo experience, where clients feel truly
          involved and valued. Step into our world, where every tattoo is a collaborative journey
          and every client is treated with the utmost care and respect.
        </p>
      </div>
    </div>
  );
}
