import React from "react";
import "../assets/css/Hero.css";
import messages2 from "../assets/svg/messages2.svg";
import calendar2 from "../assets/svg/calendar2.svg";
import map from "../assets/svg/map.svg";
import content from "../assets/svg/content.svg";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Build your best community starting from here.
        </h1>
        <p className="hero-description">
          Meet and communicate with the best people to run projects, events, or
          other activities in a more effective and fun way.
        </p>
        <div className="hero-buttons">
          <a href="/" className="btn primary-btn">
            Get Started
          </a>
          <a href="/" className="btn secondary-btn">
            Learn More
          </a>
        </div>
        <div className="hero-features">
          <div className="feature">
            <img
              src={messages2}
              alt="Build Community Icon"
              className="feature-icon"
            />
            <span>Build Community</span>
          </div>
          <div className="feature">
            <img
              src={calendar2}
              alt="Share Events Icon"
              className="feature-icon"
            />
            <span>Share Events</span>
          </div>
          <div className="feature">
            <img
              src={map}
              alt="Get Information Icon"
              className="feature-icon"
            />
            <span>Get Information</span>
          </div>
        </div>
      </div>

      <div class="hero-images">
        <img src={content} alt="Person 2" id="hero-image" />
      </div>
    </section>
  );
};

export default HeroSection;
