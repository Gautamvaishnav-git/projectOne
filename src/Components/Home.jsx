import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="#">
        <main>
          <h1>Gautamjs</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className="home2" id="about">
        <img src={vg} alt="Graphics" />
        <div className="">
          <p>
            we are providing you solutions related to tech problems you face in
            you company and also providing you high quality optimized code for
            you company project.
          </p>
        </div>
      </div>

      <div className="home3" id="services">
        <div className="">
          <h1>Who we are ?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus, ea! Laudantium est dignissimos similique recusandae ea
            facere cumque, voluptates et, earum commodi unde, fugiat illum
            consequatur! Ducimus quibusdam magnam quasi! Dolorum sit enim in
            quibusdam inventore dolores, ducimus eos non minus, saepe fuga ipsa
            natus dolor? Ut recusandae praesentium cumque, vero, dignissimos
            natus harum blandi corporis!
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{ animationDelay: "0.3s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div style={{ animationDelay: "0.5s" }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div style={{ animationDelay: "0.7s" }}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
            <div style={{ animationDelay: "1s" }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
