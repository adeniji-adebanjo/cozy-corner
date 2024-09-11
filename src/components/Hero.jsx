import React from "react";
import "../assets/css/Hero.css";
import heroImage from "../assets/images/hero-img.png";
import arrowimage from "../assets/images/arrow.svg";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-image-container">
        <img src={heroImage} alt="Hero" className="hero-image" />
        <img src={arrowimage} alt="arrow" className="arrow-image" />
      </div>
      <div className="hero-content-container">
        <div className="hero-content">
          <h1>
            Find your comfort <br /> working zone with <br /> Cozy Corner
          </h1>
          <h6>
            Change your work environment by using a co-working place, <br />
            to meet new people and gain a new network
          </h6>
          <div className="checkboxes">
            <div className="checkbox-group">
              <input type="checkbox" id="checkbox1" />
              <label htmlFor="checkbox1">Option 1</label>
              <input type="checkbox" id="checkbox2" />
              <label htmlFor="checkbox2">Option 2</label>
            </div>
            <div className="checkbox-group">
              <input type="checkbox" id="checkbox3" />
              <label htmlFor="checkbox3">Option 3</label>
              <input type="checkbox" id="checkbox4" />
              <label htmlFor="checkbox4">Option 4</label>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
