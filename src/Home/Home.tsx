import StoreFront from "../Images/brook-placeholder-front.jpeg";
import JimboMain from "../../src/Images/jimbo-masked.png";
import CarlieMain from "../../src/Images/carlie-masked.png";
import "./Home.scss";
import { Link } from "react-router-dom";
import { BookNowButton } from "../BookNowButton/BookNowButton";

export function Home() {
  return (
    <div className="home">
      <div className="imageWrapperSection section">
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

      <div className="homeImagesSection section row">
        <img className="homeJimboImage" src={JimboMain} alt="Jimbo" />
        <div className="bookNowButtonContainer">
          <BookNowButton />
        </div>
        <img className="homeCarlieImage" src={CarlieMain} alt="Carlie" />
      </div>

      <p className="homeTextSection section">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates suscipit deserunt
        repellat placeat sunt! Iste perferendis illum cupiditate, officia obcaecati culpa iure,
        molestias tempore accusamus ex cum animi, reiciendis eveniet. Quia esse ratione asperiores!
        Molestias adipisci ea laudantium accusantium nesciunt esse excepturi, veniam culpa, ipsam,
        officiis quisquam ad earum minus perferendis. Consequuntur facilis, voluptas optio tempore
        fuga ullam aut odio dicta sint possimus perferendis sequi. Ea explicabo perspiciatis odio
        commodi recusandae, adipisci incidunt libero facere quasi in maiores, praesentium esse a
        vero sed suscipit nisi doloribus voluptatum? Iste quaerat deleniti delectus repudiandae in
        ipsum? Debitis modi, quam magnam fugiat ad maiores vero reprehenderit recusandae ipsam cum
        obcaecati, tenetur iusto ducimus, esse voluptate iste maxime laboriosam hic error facilis
        impedit illo. Praesentium laboriosam quidem nulla odit eligendi. Voluptatibus, fugiat omnis.
        Culpa voluptas fugit fugiat explicabo veritatis! Fugiat libero reiciendis pariatur cumque.
      </p>
    </div>
  );
}
