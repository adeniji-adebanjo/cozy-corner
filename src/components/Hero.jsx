import React from "react";
import "../assets/css/Hero.css";
import heroImage from "../assets/images/hero-img.png";
import arrowimage from "../assets/images/arrow.svg";
import location from "../assets/svg/Location.svg";
import room from "../assets/svg/Room.svg";
import wifi from "../assets/svg/wifi.svg";

const Hero = () => {
  return (
    <>
      <section>
        <div className="hero-section">
          <div className=" hero-image-container">
            <img src={heroImage} alt="Hero" className="hero-image" />
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
            </div>
          </div>
        </div>

        <div className="slider">
          <div className="slider1">
            <img src={arrowimage} alt="arrow" className="arrow-image" />
          </div>
          <div className="slider2">
            <div className="cozy-options">
              <div className="opt">
                <ul>
                  <li>Virtual Office Event</li>
                  <li>Space for Office </li>
                </ul>
              </div>
              <div className="opt">
                <ul>
                  <li>Open Workspace </li>
                  <li>Chill-out Zone</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="perks">
        <div className="perk1">
          <img src={location} height={"80px"} width={"80px"} alt="" />
          <h4>20+ location</h4>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="perk2">
          <img src={room} height={"80px"} width={"80px"} alt="" />
          <h4>324 Rooms Available</h4>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="perk3">
          <img src={wifi} height={"80px"} width={"80px"} alt="" />
          <h4>100% Internet Connection</h4>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </>
  );
};

export default Hero;
