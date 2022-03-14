import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-image">
      <div className="hero-content">
        <div className="hero-content-inner">
          <h1>
            <span id="span-one">
              I'm <span id="span-two">Humail Khan</span>
            </span>
          </h1>
          <span className="description">A junior full stack web developer</span>
          <div>
            <button className="hero-button">Resumé</button>
          </div>
          <div className="hero-icons">
            <div className="github-icon"></div>
            <div className="linkedin-icon"></div>
            <div className="twitter-icon"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
