import "./About.scss";
import JimboBioPhoto from "../../src/Images/jimbo-main.jpeg";
import CarlieBioPhoto from "../../src/Images/carlie-main.jpeg";
import { BookNowButton } from "../BookNowButton/BookNowButton";

export function About() {
  return (
    <div className="about">
      <div className="bioSection mainBioSection section textCenter">
        <h1 className="pageTitle uppercase">Who We Are</h1>
        <p className="aboutBodyText mainBio balance">
          At The Brook, every detail has been meticulously crafted with passion and dedication. From
          the sleek, classy design to the spacious, open floor plan, our studio exudes an atmosphere
          of warmth and sophistication that clients can't help but admire. As a private studio, we
          pride ourselves on offering a more intimate tattoo experience, where clients feel truly
          involved and valued. Step into our world, where every tattoo is a collaborative journey
          and every client is treated with the utmost care and respect.
        </p>
      </div>
      <div className="row bioSection section textRight">
        <div className="bioTextContainer">
          <h2 className="sectionTitle uppercase">Jimbo</h2>
          <img className="mobileImage" src={JimboBioPhoto} alt="Jimbo" />
          <p className="aboutBodyText balance">
            Jimbo, a seasoned tattoo artist with a passion for pushing boundaries, has been honing
            his craft for 15+ years. Specializing in trash polka, abstract blackwork, and blackouts,
            Jimbo infuses his work with a unique blend of realism and abstract chaos. As the proud
            owner of THE BROOK tattoo studio for the past 3 years, he continues to carve out his
            niche in the industry, creating dynamic pieces that resonate with his clients. With each
            tattoo, Jimbo aims to strike a delicate balance between precision and spontaneity,
            leaving his mark on both skin and soul.
          </p>
        </div>
        <img className="desktopImage" src={JimboBioPhoto} alt="Jimbo" />
      </div>
      <div className="row bioSection section textLeft">
        <img className="desktopImage" src={CarlieBioPhoto} alt="Carlie" />
        <div className="bioTextContainer">
          <h2 className="sectionTitle uppercase">Carlie</h2>
          <img className="mobileImage" src={CarlieBioPhoto} alt="Carlie" />
          <p className="aboutBodyText balance">
            Meet Carlie Raven, a rising star in the world of tattoo artistry. Though her career has
            only just begun, Carlie's talent and dedication have already set her apart. With a
            natural knack for learning various tattoo techniques, she possesses a versatile skill
            set that ensures your next tattoo is in capable hands. As a well-rounded artist, Carlie
            approaches each piece with careful intentional attention to detail, from the initial
            design stages to the final touches. Her commitment to thoughtful craftsmanship
            guarantees that every tattoo she creates is not just ink on skin, but a carefully
            curated work of art. With Carlie Raven, your tattoo experience promises to be both
            exceptional and unforgettable.
          </p>
        </div>
      </div>
      <div className="bookNowButtonContainer textCenter section">
        <BookNowButton size="large" />
      </div>
    </div>
  );
}
