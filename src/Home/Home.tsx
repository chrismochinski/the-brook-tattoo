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
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit, nam at aperiam et sunt
          excepturi debitis, suscipit blanditiis laboriosam odit sequi cupiditate ea aut voluptate,
          facilis dolorem hic! Sequi soluta provident nobis ipsum nihil impedit temporibus quas
          similique laborum eveniet quos odio adipisci delectus totam, dicta dolores quae, esse
          facere? Sit cum, ipsum explicabo eaque officiis placeat voluptatum ratione assumenda
          delectus rerum necessitatibus voluptatem eligendi facere illum mollitia! Debitis quod
          quidem aliquam deserunt aliquid voluptatibus culpa asperiores atque distinctio! Eum,
          cumque quam pariatur reprehenderit nisi cupiditate? Voluptatum aliquid saepe, magni cum ad
          beatae eos, nisi reiciendis quasi in accusantium quis laborum recusandae natus itaque
          perspiciatis deserunt iure praesentium officiis adipisci exercitationem dolores aliquam.
          Repellendus laborum architecto ipsum, suscipit repellat eligendi assumenda mollitia
          deleniti quaerat vitae officiis, quos dolore debitis harum inventore illo exercitationem
          fugit, officia veritatis? Quisquam quam obcaecati soluta?
        </p>
      </div>
    </div>
  );
}
