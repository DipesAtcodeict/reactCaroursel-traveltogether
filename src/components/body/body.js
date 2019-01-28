import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Body = () => {
  return (
    
  <Carousel
    autoPlay
    showArrows={false}
    showStatus={false}
    showIndicators={false}
    swipeable={false}>
       <div>
      <img src="images/1.jpg" alt="1" />
      <p className="legend">Melamchi,Nepal</p>
    </div>
    <div>
      <img src= "images/2.jpg" alt="1"/>
      <p className="legend">Melamchi,Nepal</p>
    </div>
    <div>
      <img src="images/3.jpg" alt="1"/>
      <p className="legend">Chimki,Nepal</p>
    </div>
    <div>
      <img src="images/4.jpg" alt="1"/>
      <p className="legend">Deurali,Nepal</p>
    </div>
    <div>
      <img src="images/5.jpg" alt="1" />
      <p className="legend">Noksim,Nepal</p>
    </div>
    <div>
      <img src="images/6.jpg" alt="1"/>
      <p className="legend">Pachpokhari,Nepal</p>
    </div>
    <div>
      <img src="images/7.jpg" alt="1"/>
      <p className="legend">Pachpokhari,Nepal</p>
    </div>
    <div>
      <img src="images/8.jpg" alt="1"/>
      <p className="legend">Pachpokhari,Nepal</p>
    </div>
    </Carousel>
  );
};

export default Body;
