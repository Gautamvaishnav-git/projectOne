import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import item1 from "../assets/3.jpg";
import item2 from "../assets/4.jpg";

const Services = () => {
  return (
    <>
      <div className="services">
        <Carousel
          infiniteLoop
          autoPlay
          showStatus={false}
          showThumbs={false}
          showArrows={false}
          interval='2000'
        >
          <div className="item1">
            <img src={item1} alt="item1" />
            <p className="legend">Forntend services</p>
          </div>
          <div className="item2">
            <img src={item2} alt="item2" />
            <p className="legend">backend services</p>
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default Services;
